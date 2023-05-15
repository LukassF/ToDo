import { ToDosProps } from '../components/todos'
import { Status } from "../components/modal"

type changeStatusProps = {
    statusState: Status,
    id:number
    array: ToDosProps[]
}

export default function changeStatus({statusState, id, array}: changeStatusProps){
    let itinerary: ToDosProps[] = []
    let date: Date = new Date()
    
    if(array){
        array.forEach(item => {
            if(item.id === id) itinerary.push({id:item.id, name:item.name, deadline:date, category:item.category, image:item.image, status:statusState})
            else itinerary.push(item)
        })
    }
    window.localStorage.setItem('agenda', JSON.stringify(itinerary))
    
}