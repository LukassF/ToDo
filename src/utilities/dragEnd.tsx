import { useState } from "react"
import UpdateIndexes from "./updateIndexes"
import { ToDosProps } from "../components/todos"
import { DragUpdate, DropResult } from "react-beautiful-dnd"
import { Status } from "../components/modal"
import changeStatus from "./changeStatus"

export default function dragEnd(result: DropResult, updateHistory:boolean, setUpdateHistory: (value:boolean) => void){

    const localStorage: ToDosProps[] = JSON.parse(window.localStorage.getItem('agenda') || '[]')
    if(!result.destination || result.destination === result.source) return
    else {
      let add
      if(result.source.droppableId === 'Completed'){
        add = localStorage[result.source.index]
        localStorage.splice(result.source.index,1)
      }else{
        add = localStorage[result.source.index]
        localStorage.splice(result.source.index,1)
      }

      if(result.destination.droppableId === 'Completed'){
        localStorage.splice(result.destination.index,0,add)
        UpdateIndexes(localStorage)
        changeStatus({statusState: Status.completed,id: result.destination.index, array:localStorage})
      }else{
        localStorage.splice(result.destination.index,0,add)
        UpdateIndexes(localStorage)
        changeStatus({statusState: Status.failed,id: result.destination.index, array: localStorage})
      }
      setUpdateHistory(!updateHistory)
    }

  }