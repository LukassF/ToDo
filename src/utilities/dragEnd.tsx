import { ToDosProps } from "../components/todos"
import { DropResult } from "react-beautiful-dnd"
import { actions } from "../data/redux_store"

type DragendProps = {
  result : DropResult,
  dispatch: any,
  completed: ToDosProps[],
  failed: ToDosProps[]
}

export default function dragEnd({result,dispatch,completed, failed}:DragendProps){

  const sort = () => {
      dispatch(actions.sort())
  }
  const remove = (index:number, type:string) => {
      dispatch(actions.removeToDo({index,type}))
  }
  const addBack = (index:number, added:ToDosProps,type:string) => {
    dispatch(actions.addBack({index,added,type}))
  }
    
  if(!result.destination || result.destination === result.source) return
  else {
    let add
    if(result.source.droppableId === 'Completed'){
      add = completed[result.source.index]
      remove(result.source.index,'completed')
    }else{
      add = failed[result.source.index]
      remove(result.source.index,'failed')
    }

    if(result.destination.droppableId === 'Completed'){
      addBack(result.destination.index,add,'completed')
      sort()
    }else{
      addBack(result.destination.index,add, 'failed')
      sort()
    }
  }
}
