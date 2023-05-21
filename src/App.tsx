import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'
import NavbarComponent from './pages/navbar'
import Home from './pages/home'
import About from './pages/about'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './data/redux_store'
import History from './pages/history'
import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { DragDropContext} from 'react-beautiful-dnd'
import dragEnd from './utilities/dragEnd';


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

function App() {
  const completed = useAppSelector((state) => state.agenda.completed)
  const failed = useAppSelector((state) => state.agenda.failed)
  const dispatch = useAppDispatch()
  
return(
    <DragDropContext onDragEnd={(result) => dragEnd({result,dispatch,completed, failed})}>
      <NavbarComponent />
      <Container>
        <Routes>
          <Route path="/todo-app" element={<Home />}/>
          <Route path="/todo-app/about" element={<About />}/>
          <Route path="/todo-app/history" element={<History />}/>
          <Route path="*" element={<h1>Error 404</h1>}/>
        </Routes>
      </Container>
    </DragDropContext>
)
}

export default App;
