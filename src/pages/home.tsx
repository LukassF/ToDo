import {Container,Row, Col} from 'react-bootstrap'
import ToDos, { ToDosProps } from '../components/todos'
import ModalComponent from '../components/modal'
import {useState} from 'react'

export default function Home(){
    const [show, setShow] = useState(false);
    const localStorage: ToDosProps[] = JSON.parse(window.localStorage.getItem('agenda') || '{}')

    return(
        <Container className='pt-5 ' >
            <Row>
                {localStorage && localStorage.map(item => {
                    return(
                        <Col key={Math.random()} lg={6} md={12}>
                            <ToDos 
                                id={item.id}
                                name={item.name}
                                deadline={item.deadline}
                                category={item.category}
                                image={item.image}
                                key={item.id}
                            />
                        </Col>
                    )
                })}
                
            </Row>

            <button id="add-button" onClick={() => setShow(true)}>+ Add</button>
            <ModalComponent show={show} setShow={setShow}/>
        </Container>
    )
}