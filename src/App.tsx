import {useState, createContext, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'
import NavbarComponent from './pages/navbar'
import Home from './pages/home'
import About, { useAppDispatch, useAppSelector } from './pages/about'
import History from './pages/history'
import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { DragDropContext} from 'react-beautiful-dnd'
import dragEnd from './utilities/dragEnd';

function App() {
  const completed = useAppSelector((state) => state.agenda.completed)
  const failed = useAppSelector((state) => state.agenda.failed)
  const dispatch = useAppDispatch()
  
return(
    <DragDropContext onDragEnd={(result) => dragEnd({result,dispatch,completed, failed})}>
      <NavbarComponent />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/history" element={<History />}/>
          <Route path="*" element={<h1>Error 404</h1>}/>
        </Routes>
      </Container>
    </DragDropContext>
)
}

export default App;
