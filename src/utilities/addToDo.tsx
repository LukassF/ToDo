import { ToDosProps } from '../components/todos'

type AddToDoProps = {
    date:Date,
    name: string,
    category: string
}


export default function AddToDo({date, name, category}: AddToDoProps){
    let agenda:ToDosProps[]
    const storage: ToDosProps[] = JSON.parse(window.localStorage.getItem('agenda') || '{}')

    if(window.localStorage.getItem('agenda')){
        agenda = [...storage,{id:storage.length, name:name, deadline:date, category:category, image:''}]
    }else{
        agenda = [{id:0, name:name, deadline:date, category:category, image:''}]
    }

    window.localStorage.setItem('agenda',JSON.stringify(agenda))
    window.location.reload()
}