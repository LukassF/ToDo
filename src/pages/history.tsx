import { Container, Row, Col} from "react-bootstrap";

 export default function History(){
    return(
      <Container className="mt-3 fs-2">
         <Row>
            <Col className="d-flex justify-content-center bg-success text-light">Completed</Col>
            <Col className="d-flex justify-content-center bg-secondary text-light">Failed</Col>
         </Row>

      </Container>
    )
 }