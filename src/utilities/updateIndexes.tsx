import { ToDosProps } from "../components/todos";

export default function UpdateIndexes(array: ToDosProps[]){
    if(!array || array.length === 0) return
    else{
        array.forEach((item,index) => {
            item.id = index
        })
    }
    return array
}