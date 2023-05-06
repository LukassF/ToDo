import {Modal, CloseButton, Form, Button, Container, Col, Row} from 'react-bootstrap'

interface ModalProps{
    show:boolean;
    setShow: (value: boolean) => void;
}

export default function ModalComponent({show, setShow}: ModalProps){
    return(
        <Modal show={show} centered>
            <Modal.Header style={{backgroundColor:'rgba(226, 220, 220,0.6)'}}>
            <Modal.Title>Add a ToDo!</Modal.Title>
            <CloseButton  onClick={() => setShow(false)}/>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>To-Do Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter a name"></Form.Control>
                        <Form.Text>Something like: 'Go Shopping'.</Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Choose Category</Form.Label>
                        <Form.Select>
                            <option>Choose below</option>
                            <option>Sports</option>
                            <option>Software Developement</option>
                            <option>Gardening</option>
                            <option>Social</option>
                            <option>Miscellaneous</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Label>Choose a deadline</Form.Label>
                        <Form.Control type="datetime-local"></Form.Control>
                        <Form.Text>Make sure to meet it!</Form.Text>
                    </Form.Group>

                    <Container>
                        <Row>
                            <Col><Button variant="success" onClick={() => setShow(false)}>Add now!</Button></Col>
                            <Col className='d-flex justify-content-end'><Button variant="secondary">Clear all fields</Button></Col>
                        </Row>
                    </Container>
                    
                </Form>
            </Modal.Body>
        </Modal>
    )
}