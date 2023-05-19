import images from '../data/category-images.json'
import { Status } from '../components/modal'
import { Agenda } from '../data/redux_store'


type AddToDoProps = {
    date:Date,
    name: string,
    category: string,
    status: Status,
    state:Agenda
}


export default function AddToDo({date, name, category, status, state}: AddToDoProps){
    let chosenCategoryImage: string = ''
    
    images.images.map(item => {
        if(item.category === category) chosenCategoryImage = item.image
    })
    state.agenda.push({id:state.agenda.length, name:name, deadline:date, category:category, image:chosenCategoryImage, status:status})
}