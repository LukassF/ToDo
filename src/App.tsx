import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'
import NavbarComponent from './pages/navbar'
import Home from './pages/home'
import Trending from './pages/trending'
import History from './pages/history'
import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
  return(
    <>
      <NavbarComponent />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/trending" element={<Trending />}/>
          <Route path="/history" element={<History />}/>
          <Route path="*" element={<h1>Error 404</h1>}/>
        </Routes>
      </Container>
    </>
  )
}

export default App;
