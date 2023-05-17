import {Container,Row, Col,Form, Button} from 'react-bootstrap'
import ToDos, { ToDosProps } from '../components/todos'
import ModalComponent from '../components/modal'
import {useState, useEffect} from 'react'

export default function Home(){
    const [show, setShow] = useState(false);
    const localStorage: ToDosProps[] = JSON.parse(window.localStorage.getItem('agenda') || '[]')
    const [search,setSearch] = useState('')

    return(
        <Container className='pt-5' >
            {localStorage.filter(item => item.status === 'unresolved').length !== 0 && <Row className='mb-5'>
                <Form>
                    <Row className='gx-0'>
                        <Col xs={12}><Form.Control type="text" placeholder='Browse current to-dos' onChange={(e) => setSearch(e.target.value)}></Form.Control></Col>
                    </Row>            
                </Form>
            </Row>}
            <Row>
                {localStorage.filter(item => item.status === 'unresolved').length !== 0 ? localStorage.map(item => {
                    if(item.status === "unresolved" && item.name.toLowerCase().includes(search.toLowerCase())){
                        return(
                            <Col key={Math.random()} lg={6} md={12}>
                                <ToDos 
                                    id={item.id}
                                    name={item.name}
                                    deadline={item.deadline}
                                    category={item.category}
                                    image={item.image}
                                    key={item.id}
                                    status={item.status}
                                />
                            </Col>
                        )}
                }) : 
                    <Col xs={12} id="no-content-image">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/woman-searching-for-content-4006349-3309935.png?f=webp" alt="no-content-image"/>    
                        <h1>No Todos Yet... Add some!</h1>
                    </Col>
                    }
                
            </Row>
            
            <button id="add-button" onClick={() => setShow(true)}>+ Add</button>
            <ModalComponent show={show} setShow={setShow}/>
        </Container>
    )
}