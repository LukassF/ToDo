import { Container, Row, Col, Table, Card} from "react-bootstrap";
import { Droppable } from "react-beautiful-dnd";
import { ToDosProps } from "../components/todos";
import RecentCards from "../components/recent_todoCards";

 export default function History(){
   const localStorage: ToDosProps[] = JSON.parse(window.localStorage.getItem('agenda') || '[]')

   return(
      <Container className="mt-3">
         <Row>
            <Col className="d-flex justify-content-center bg-success text-light">
               <Droppable droppableId="Completed">
                  {
                     (provided) => (
                        <Container ref={provided.innerRef} {...provided.droppableProps}>
                           Completed
                           <Row className="d-flex justify-content-center">
                              {localStorage.map(item => {
                                 if(item.status === 'completed'){
                                    return(
                                       <RecentCards 
                                          name={item.name}
                                          category={item.category}
                                          deadline={item.deadline}
                                       />
                                    )
                                 }
                              })}
                           </Row>
                        </Container>
                     )
                  }                  
               </Droppable>
            </Col>
            <Col className="d-flex justify-content-center bg-secondary text-light">
               <Droppable droppableId="Failed">
                  {
                     (provided) => (
                        <Container  ref={provided.innerRef} {...provided.droppableProps}>
                           Failed
                           <Row className="d-flex justify-content-center">
                              {localStorage.map(item => {
                                 if(item.status === 'failed'){
                                    return(
                                       <RecentCards 
                                          name={item.name}
                                          category={item.category}
                                          deadline={item.deadline}
                                       />
                                    )
                                 }
                              })}
                           </Row>
                        </Container>
                     )
                  }
               </Droppable>
            </Col>
         </Row>

      </Container>
   )
 }