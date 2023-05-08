import { ToDosProps } from '../components/todos'
import images from '../data/category-images.json'
import { Status } from '../components/modal'


type AddToDoProps = {
    date:Date,
    name: string,
    category: string,
    status: Status
}


export default function AddToDo({date, name, category, status}: AddToDoProps){
    let agenda:ToDosProps[]
    const storage: ToDosProps[] = JSON.parse(window.localStorage.getItem('agenda') || '{}')
    let chosenCategoryImage: string = ''

    images.images.map(item => {
        if(item.category === category) chosenCategoryImage = item.image
    })

    if(window.localStorage.getItem('agenda')){
        agenda = [...storage,{id:storage.length, name:name, deadline:date, category:category, image: chosenCategoryImage, status:status}]
    }else{
        agenda = [{id:0, name:name, deadline:date, category:category, image:chosenCategoryImage, status:status}]
    }

    window.localStorage.setItem('agenda',JSON.stringify(agenda))
    window.location.reload()
}