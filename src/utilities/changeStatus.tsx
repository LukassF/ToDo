import { ToDosProps } from '../components/todos'
import { Status } from "../components/modal"

type changeStatusProps = {
    statusState: Status,
    id:number
    array: ToDosProps[]
}

export default function changeStatus({statusState, id, array}: changeStatusProps){
    let itinerary: ToDosProps[] = []
    
    if(array){
        array.forEach(item => {
            if(item.id === id) itinerary.push({id:item.id, name:item.name, deadline:item.deadline, category:item.category, image:item.image, status:statusState})
            else itinerary.push(item)
        })
    }
    console.log(itinerary)
    window.localStorage.setItem('agenda', JSON.stringify(itinerary))
    
}