
import { ToDosProps } from '../components/todos'
import { Status } from "../components/modal"

type changeStatusProps = {
    statusState: Status,
    id:number
}

export default function changeStatus({statusState, id}: changeStatusProps){
    let itinerary: ToDosProps[] = []
    const storage: ToDosProps[] = JSON.parse(window.localStorage.getItem('agenda') || '{}')
    if(window.localStorage.getItem('agenda')){
        storage.forEach(item => {
            if(item.id === id) itinerary.push({id:item.id, name:item.name, deadline:item.deadline, category:item.category, image:item.image, status:statusState})
            else itinerary.push(item)
        })
    }


    window.localStorage.setItem('agenda', JSON.stringify(itinerary))
}