import { Container, Row, Col} from "react-bootstrap";
import { Droppable } from "react-beautiful-dnd";
import { ToDosProps } from "../components/todos";
import RecentCards from "../components/recent_todoCards";
// import { isNamedExports } from "typescript";
import {useEffect, useContext} from 'react'
import { UpdateContext } from "../App";

 export default function History(){
   let localStorage: ToDosProps[] = JSON.parse(window.localStorage.getItem('agenda') || '[]')
   const updated = useContext(UpdateContext)
   
   useEffect(() => {
      localStorage = JSON.parse(window.localStorage.getItem('agenda') || '[]')
   },[updated])
  

   return(
      <Container className="mt-5">
         <Row >
            <Col className="d-flex justify-content-center text-light" id="column-1-history" xs={12} lg={6} >
               <Container className="droppable-container mt-2">
                  <span className="title">Completed</span>
                  <Droppable droppableId="Completed">
                     {
                        (provided) => (
                           <div ref={provided.innerRef} {...provided.droppableProps} className="inner-droppable">
                              <Row className="d-flex justify-content-center" style={{position:'relative'}}>
                                 {localStorage.filter(item => item.status === 'completed').length !== 0 ? localStorage.map((item, index) => {
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
                                 })
                                 : <h3 className="text-muted">Your completed todos will appear right here!</h3>
                                 }
                                 {provided.placeholder}
                              </Row>
                           </div>
                        )
                     }                  
                  </Droppable>
                 
               </Container>
            </Col>
            <Col className="d-flex justify-content-center text-light" id="column-2-history">
               <Container  className="droppable-container mt-2">
                  <span className="title">Failed</span>
                  <Droppable droppableId="Failed">
                     {
                        (provided) => (
                           <div ref={provided.innerRef} {...provided.droppableProps} className="inner-droppable">
                              <Row className="d-flex justify-content-center" >
                                 {localStorage.filter(item => item.status === 'failed').length !== 0 ? localStorage.map((item, index) => {
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
                                 })
                                 : <h3 className="text-muted">Your failed todos will appear right here!</h3>
                              }
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