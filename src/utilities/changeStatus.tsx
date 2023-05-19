import { ToDosProps } from '../components/todos'
import { Status } from "../components/modal"
import { Agenda } from '../data/redux_store'

type changeStatusProps = {
    statusState: Status,
    id:number
    state:Agenda
}

export default function changeStatus({statusState, id, state}: changeStatusProps){
    let date: Date = new Date()
    let filteredCompleted:ToDosProps[] = []
    let filteredFailed : ToDosProps[] = []
    let filteredUnresolved : ToDosProps[] = []
    
    if(state.agenda){
        state.agenda.forEach(item => {
            if(item.id === id) state.agenda.splice(id,1,{id:item.id, name:item.name, deadline:date, category:item.category, image:item.image, status:statusState})
        })
    }

    filteredCompleted = state.agenda.filter(item => item.status === Status.completed)
    filteredFailed = state.agenda.filter(item => item.status === Status.failed)
    filteredUnresolved = state.agenda.filter(item => item.status === Status.unresolved)

    filteredCompleted.forEach((item,index) => {
        item.id = index
    })
    filteredFailed.forEach((item,index) => {
        item.id = index + filteredCompleted.length
    })
    filteredUnresolved.forEach((item,index) => {
        item.id = index + filteredCompleted.length + filteredFailed.length
    })


    state.completed = filteredCompleted
    state.failed = filteredFailed
    state.agenda = state.completed.concat(state.failed, filteredUnresolved)

    
}