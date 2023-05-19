import { Container, Row, Col} from "react-bootstrap";
import { Droppable } from "react-beautiful-dnd";
import RecentCards from "../components/recent_todoCards";
import { useAppSelector } from "./about";

 export default function History(){
   const completed = useAppSelector((state) => state.agenda.completed)
   const failed = useAppSelector((state) => state.agenda.failed)

   return(
      <Container className="mt-5">
         <Row >
            <Col className="d-flex justify-content-center text-light" id="column-1-history" xs={12} lg={6} >
               <Container className="droppable-container mt-2">
                  <span className="title">Completed</span>
                  <Droppable droppableId="Completed">
                     {
                        (provided, snapshot) => (
                           <div 
                              ref={provided.innerRef} 
                              {...provided.droppableProps} 
                              className={`inner-droppable ${snapshot.isDraggingOver ? 'dragcompleted': ''}`}
                           >
                              <Row className="d-flex justify-content-center" style={{position:'relative'}}>
                                 {completed.length !== 0 ? completed.map((item, index) => {
                                   
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
                        (provided, snapshot) => (
                           <div 
                              ref={provided.innerRef} 
                              {...provided.droppableProps} 
                              className={`inner-droppable ${snapshot.isDraggingOver ? 'dragfailed': ''}`}>
                              <Row className="d-flex justify-content-center" >
                                 {failed.length !== 0 ? failed.map((item, index) => {
                                   
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