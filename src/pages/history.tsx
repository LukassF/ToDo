import { Container, Row, Col, Table, Card} from "react-bootstrap";
import { Droppable } from "react-beautiful-dnd";
import { ToDosProps } from "../components/todos";
import RecentCards from "../components/recent_todoCards";
import { isNamedExports } from "typescript";
import {useEffect, useContext} from 'react'
import { UpdateContext } from "../App";

 export default function History(){
   let localStorage: ToDosProps[] = JSON.parse(window.localStorage.getItem('agenda') || '[]')
   const updated = useContext(UpdateContext)
   
   useEffect(() => {
      localStorage = JSON.parse(window.localStorage.getItem('agenda') || '[]')
   },[updated])
  

   return(
      <Container className="mt-3">
         <Row>
            <Col className="d-flex justify-content-center bg-success text-light" style={{width:'50%'}}>
               <Container  className="droppable-container">
                  <span>Completed</span>
                  <Droppable droppableId="Completed">
                     {
                        (provided) => (
                           <div ref={provided.innerRef} {...provided.droppableProps} className="inner-droppable">
                              <Row className="d-flex justify-content-center" >
                                 {localStorage.map((item, index) => {
                                    if(item.status === 'completed'){
                                       return(
                                          <RecentCards 
                                             key={item.id}
                                             id={item.id}
                                             index={index}
                                             name={item.name}
                                             category={item.category}
                                             deadline={item.deadline}
                                          />
                                       )
                                    }
                                 })}
                                 {provided.placeholder}
                              </Row>
                           </div>
                        )
                     }                  
                  </Droppable>
               </Container>
            </Col>
            <Col className="d-flex justify-content-center bg-secondary text-light" style={{width:'50%'}}>
               <Container  className="droppable-container">
                  <span>Failed</span>
                  <Droppable droppableId="Failed">
                     {
                        (provided) => (
                           <div ref={provided.innerRef} {...provided.droppableProps} className="inner-droppable">
                              <Row className="d-flex justify-content-center" >
                                 {localStorage.map((item, index) => {
                                    if(item.status === 'failed'){
                                       return(
                                          <RecentCards 
                                             key={item.id}
                                             id={item.id}
                                             index={index}
                                             name={item.name}
                                             category={item.category}
                                             deadline={item.deadline}
                                          />
                                       )
                                    }
                                 })}
                                 {provided.placeholder}
                              </Row>   
                           </div>   
                        )
                     }
                  </Droppable>
               </Container>
            </Col>
         </Row>

      </Container>
   )
 }