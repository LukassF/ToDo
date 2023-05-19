import { actions } from "../data/redux_store"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../data/redux_store'
import { Status } from "../components/modal"

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default function About(){
    const agenda = useAppSelector((state) => state.agenda.agenda)
    const dispatch = useAppDispatch()
    const increment = () => {
        dispatch(actions.add({name:"Dawg", deadline:new Date(),category:'shopping',image:'', status:Status.completed}))
    }
   
    return(
        <>
        <h1>{agenda.map(item => item.id)}</h1>
        <button onClick={increment}>+</button>

        </>
    )
}