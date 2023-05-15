import {useState, createContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'
import NavbarComponent from './pages/navbar'
import Home from './pages/home'
import Trending from './pages/trending'
import History from './pages/history'
import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { DragDropContext} from 'react-beautiful-dnd'
import dragEnd from './utilities/dragEnd';

export const UpdateContext = createContext<boolean>(false)

function App() {
  const [updateHistory, setUpdateHistory] = useState<boolean>(false)

  return(
    <UpdateContext.Provider value={updateHistory}>
      <DragDropContext onDragEnd={(result) => dragEnd(result,updateHistory, setUpdateHistory)}>
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
