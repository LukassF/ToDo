import { configureStore, createSlice} from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist"
import {combineReducers} from '@reduxjs/toolkit'
import { ToDosProps } from "../components/todos"
import AddToDo from "../utilities/addToDo"
import changeStatus from "../utilities/changeStatus"
import { Status } from "../components/modal"

const persistConfig = {
    key: ' agenda',
    version: 1,
    storage
}

export interface Agenda {
    agenda: ToDosProps[];
    completed: ToDosProps[];
    failed: ToDosProps[];
}
  
const initialState: Agenda = {
    agenda: [],
    completed:[],
    failed:[]
};


const arraySlice = createSlice({
    name:'agenda',
    initialState,
    reducers: {
        add(state, action){
            AddToDo({
                date:action.payload.deadline,
                name:action.payload.name,
                category:action.payload.category,
                status:action.payload.status,
                state
            })
        },
        change(state,action){
            changeStatus({
                statusState:action.payload.status,
                id:action.payload.id,
                state
            })
        },
        removeToDo(state, action){
            switch(action.payload.type){
                case 'completed':
                    state.completed.splice(action.payload.index,1)
                    break
                case 'failed':
                    state.failed.splice(action.payload.index,1)
                    break
                default:
                    break
            }
           
        },
        addBack(state,action){
            switch(action.payload.type){
                case 'completed':
                    state.completed.splice(action.payload.index,0,action.payload.added)
                    break
                case 'failed':
                    state.failed.splice(action.payload.index,0,action.payload.added)
                    break
                default:
                    break
            }
            
        },
        sort(state){
            let completedLen = state.completed.length
            state.completed.forEach((item,index) => {
                item.id = index
                item.status = Status.completed
            })
            state.failed.forEach((item,index) => {
                item.id = index + completedLen
                item.status = Status.failed
            })
        }
    }
})

const reducer = combineReducers({
    agenda: arraySlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const actions = arraySlice.actions
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch