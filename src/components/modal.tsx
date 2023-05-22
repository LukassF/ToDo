import {Modal, CloseButton, Form, Button, Container, Col, Row} from 'react-bootstrap'
import {createRef, useState} from 'react'
import { actions } from "../data/redux_store"
import { useAppDispatch} from '../App'

export enum Status{
    unresolved = "unresolved",
    failed = "failed",
    completed = "completed"
}

interface ModalProps{
    show:boolean
    setShow: (value: boolean) => void
}


export default function ModalComponent({show, setShow}: ModalProps){

    const [date, setDate] = useState(new Date())
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const status: Status = Status.unresolved 
    
    const NameRef = createRef<HTMLInputElement>();
    const CategoryRef = createRef<HTMLSelectElement>();
    const DateRef = createRef<HTMLInputElement>();

    const dispatch = useAppDispatch()
    const increment = () => {
        dispatch(actions.add({name:name, deadline:date,category:category, status:status}))
    }


    function Update(){
        if(!NameRef.current || !CategoryRef.current || !DateRef.current) return
        else if(NameRef.current.value.length !== 0 && CategoryRef.current.value!== '- - - - - -' && DateRef.current.value.length !== 0) increment()         
    }

    function handleEnter(e: any){
        if(e.keyCode === 13){
            e.preventDefault()
            setShow(false)
            Update()
        }
    }

    window.onkeydown = (e) => handleEnter(e)

    function Clear(){
        if(!NameRef.current || !CategoryRef.current || !DateRef.current) return
        else{
            NameRef.current.value = ''
            CategoryRef.current.value = '- - - - - -'
            DateRef.current.value = 'dd/mm/yyyy, --:--'
        }
    }

    return(
        <Modal show={show} centered id='modal'>
            <Modal.Header style={{backgroundColor:'rgba(226, 220, 220,0.6)'}}>
            <Modal.Title>Add a ToDo!</Modal.Title>
            <CloseButton  onClick={() => setShow(false)}/>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Choose a name</Form.Label>
                        <Form.Control type="text" placeholder="Enter a name" onChange={(e) => setName(e.target.value)} ref={NameRef}></Form.Control>
                        <Form.Text>Something like: 'Go Shopping'. Make it concise.</Form.Text>
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
                            <option>Medical</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Label>Choose a deadline</Form.Label>
                        <Form.Control type="datetime-local" onChange={(e) => setDate(new Date(e.target.value))} ref={DateRef}></Form.Control>
                        <Form.Text>Make sure to meet it!</Form.Text>
                    </Form.Group>

                    <Container>
                        <Row>
                            <Col><Button variant="success" onClick={() => {
                                setShow(false)
                                Update()
                                }}>Add now!</Button></Col>
                            <Col className='d-flex justify-content-end'><Button variant="secondary" onClick={() => Clear()}>Clear all fields</Button></Col>
                        </Row>
                    </Container>
                    
                </Form>
            </Modal.Body>
        </Modal>
    )
}