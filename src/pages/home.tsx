import {Container,Row, Col} from 'react-bootstrap'
import ToDos, { ToDosProps } from '../components/todos'
import ModalComponent from '../components/modal'
import {useState} from 'react'

export default function Home(){
    const [show, setShow] = useState(false);
    const localStorage: ToDosProps[] = JSON.parse(window.localStorage.getItem('agenda') || '[]')

    return(
        <Container className='pt-5' >
            <Row>
                {localStorage.length !== 0 ? localStorage.map(item => {
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
                    )
                }) : 
                    <Col xs={12} id="no-content">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/woman-searching-for-content-4006349-3309935.png?f=webp"/>    
                        <h1>No Todos Yet... Add some!</h1>
                    </Col>
                    }
                
            </Row>
            
            <button id="add-button" onClick={() => setShow(true)}>+ Add</button>
            <ModalComponent show={show} setShow={setShow}/>
        </Container>
    )
}