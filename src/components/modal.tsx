import {Modal, CloseButton, Form, Button, Container, Col, Row} from 'react-bootstrap'
import {createRef} from 'react'

interface ModalProps{
    show:boolean
    setShow: (value: boolean) => void
    setDate: (value: Date) => void
    setName: (value: string) => void
    setCategory: (value: string) => void
    setUpdate: (value:boolean) => void
}

export default function ModalComponent({show, setShow, setDate, setName, setCategory, setUpdate}: ModalProps){
    
    const NameRef = createRef<HTMLInputElement>();
    const CategoryRef = createRef<HTMLSelectElement>();
    const DateRef = createRef<HTMLInputElement>();


    function Update(){
        if(!NameRef.current || !CategoryRef.current || !DateRef.current) return
        else if(NameRef.current.value.length !== 0 && CategoryRef.current.value!== '- - - - - -' && DateRef.current.value.length !== 0) setUpdate(true)      
    }

    return(
        <Modal show={show} centered>
            <Modal.Header style={{backgroundColor:'rgba(226, 220, 220,0.6)'}}>
            <Modal.Title>Add a ToDo!</Modal.Title>
            <CloseButton  onClick={() => setShow(false)}/>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Choose a name</Form.Label>
                        <Form.Control type="text" placeholder="Enter a name" onChange={(e) => setName(e.target.value)} ref={NameRef}></Form.Control>
                        <Form.Text>Something like: 'Go Shopping'.</Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Choose a category</Form.Label>
                        <Form.Select onChange={(e) => setCategory(e.target.value)} ref={CategoryRef}>
                            <option>- - - - - -</option>
                            <option>Sports</option>
                            <option>Software Developement</option>
                            <option>Gardening</option>
                            <option>Social</option>
                            <option>Miscellaneous</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Label>Choose a deadline</Form.Label>
                        <Form.Control type="datetime-local" onChange={(e) => setDate(new Date(e.target.value))} ref={DateRef}></Form.Control>
                        <Form.Text>Make sure to meet it!</Form.Text>
                    </Form.Group>

                    <Container>
                        <Row>
                            <Col><Button variant="success" onClick={(e) => {
                                setShow(false)
                                Update()
                                }}>Add now!</Button></Col>
                            <Col className='d-flex justify-content-end'><Button variant="secondary">Clear all fields</Button></Col>
                        </Row>
                    </Container>
                    
                </Form>
            </Modal.Body>
        </Modal>
    )
}