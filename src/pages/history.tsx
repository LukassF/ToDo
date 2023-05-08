import { Container, Row, Col, Table} from "react-bootstrap";
import ToDos from "../components/todos";
import { ToDosProps } from "../components/todos";

 export default function History(){
   // const localStorage: ToDosProps[] = JSON.parse(window.localStorage.getItem('agenda') || '{}')
   return(
      <Container className="mt-3">
         <Row>
            <Col className="d-flex justify-content-center bg-success text-light">
               <Container>
                  Completed
                  {/* <Row className="d-flex justify-content-center">
                     <Col>
                        {localStorage && localStorage.map(item => {
                           return(
                           <ToDos 
                              id={item.id}
                              name={item.name}
                              deadline={item.deadline}
                              category={item.category}
                              image={item.image}
                              key={item.id}
                           />
                           )
                        })}
                     </Col>
                  </Row> */}

                  <Row className="d-flex justify-content-center">
                     <Table striped bordered hover variant="dark">
                        <thead>
                           <tr>
                              <th></th>
                              <th>Name</th>
                              <th>Date of completion</th>
                              <th>Category</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>1</td>
                              <td>Create a template</td>
                              <td>Wed 13 May 2023</td>
                              <td>Software developement<span style={{float:'right'}}><i className="fa fa-trash"></i></span></td>
                           </tr>
                        </tbody>
                     </Table>
                  </Row>
               </Container>
            </Col>
            <Col className="d-flex justify-content-center bg-secondary text-light">Failed</Col>
         </Row>

      </Container>
   )
 }