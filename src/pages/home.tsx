import {Container,Row, Col,Form} from 'react-bootstrap'
import ToDo from '../components/todos'
import ModalComponent from '../components/modal'
import {useState} from 'react'
import { useAppSelector } from '../App'

export default function Home(){
    const [show, setShow] = useState(false);
    const [search,setSearch] = useState('')
    
    const agenda = useAppSelector((state) => state.agenda.agenda)

    return(
        <Container className="pt-5" style={{ paddingBottom: "100px" }} >
            {agenda.filter(item => item.status === 'unresolved').length !== 0 && <Row className='mb-5'>
                <Form>
                    <Row className='gx-0'>
                        <Col xs={12}><Form.Control type="text" placeholder='Browse current to-dos' onChange={(e) => setSearch(e.target.value)}></Form.Control></Col>
                    </Row>            
                </Form>
            </Row>}
            <Row>
                {agenda.filter(item => item.status === 'unresolved').length !== 0 ? agenda.map(item => {
                    if(item.status === "unresolved" && item.name.toLowerCase().includes(search.toLowerCase())){
                        return(
                            <Col key={Math.random()} lg={6} md={12}>
                                <ToDo 
                                    id={item.id}
                                    name={item.name}
                                    deadline={item.deadline}
                                    category={item.category}
                                    image={item.image}
                                    key={item.id}
                                    status={item.status}
                                />
                            </Col>
                        )}else return ""
                }) : 
                    <Col xs={12} id="no-content-image">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/woman-searching-for-content-4006349-3309935.png?f=webp" alt=""/>    
                        <h1>No Todos Yet... Add some!</h1>
                    </Col>
                    }
                
            </Row>
            
            <button id="add-button" onClick={() => setShow(true)}>+ Add</button>
            <ModalComponent show={show} setShow={setShow}/>
        </Container>
    )
}
