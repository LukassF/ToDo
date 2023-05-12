import {useState, createContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'
import NavbarComponent from './pages/navbar'
import Home from './pages/home'
import Trending from './pages/trending'
import History from './pages/history'
import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { Status } from './components/modal';
import { ToDosProps } from './components/todos';
import changeStatus from './utilities/changeStatus';
import UpdateIndexes from './utilities/updateIndexes';

export const UpdateContext = createContext<boolean>(false)

function App() {
  const [updateHistory, setUpdateHistory] = useState<boolean>(false)
  const localStorage: ToDosProps[] = JSON.parse(window.localStorage.getItem('agenda') || '[]')

  function dragEnd(result: DropResult){
    if(!result.destination || result.destination === result.source) return
    else {
      let add
      console.log(result.source.index)
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
  return(
    <UpdateContext.Provider value={updateHistory}>
      <DragDropContext onDragEnd={dragEnd}>
        <NavbarComponent />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/trending" element={<Trending />}/>
            <Route path="/history" element={<History />}/>
            <Route path="*" element={<h1>Error 404</h1>}/>
          </Routes>
        </Container>
      </DragDropContext>
    </UpdateContext.Provider>
  )
}

export default App;
