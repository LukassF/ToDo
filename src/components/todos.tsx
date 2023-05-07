import {Card, Button, Container, Row, Col, Badge} from 'react-bootstrap'
import {useState,useEffect} from 'react'
import { CSSTransition } from 'react-transition-group'
import calculateTime from '../utilities/calculateTime'

export type ToDosProps = {
    id:number,
    name:string,
    deadline: Date,
    category: string,
    image: string
}

export default function ToDos({id, name, deadline, category, image}: ToDosProps){
    const [hover,setHover] = useState(false)
    const [remainingTime, setRemainingTime] = useState('')
    const deadlineParsed: Date = new Date(deadline)

    useEffect(() => {
        calculateTime({deadline: deadlineParsed, setState: setRemainingTime})
        setInterval(() => calculateTime({deadline: deadlineParsed, setState: setRemainingTime}),60000)
    },[])

    
    let timeoutID: number;
    return(
        <Card 
            className='mb-3' 
            key={id}
            id="card" 
            onMouseEnter={() => {
                window.clearTimeout(timeoutID)
                timeoutID = window.setTimeout(() => setHover(true),1000)
            }} 
            onMouseLeave={() => {
                window.clearTimeout(timeoutID)
                setHover(false)
            }}>
            <Card.Img id="card-image" style={{backgroundImage:`url(${image})`}}></Card.Img>
            <Card.ImgOverlay style={{background:'rgba(0,0,0,0.7)'}}>
                <CSSTransition in={!hover} unmountOnExit timeout={300} classNames="overlay-animation">
                    <Card.ImgOverlay>
                        <Card.Title style={{padding:'0px 10px'}} className="overlay">{name}</Card.Title>
                        <Container id="container">
                            <Button variant="success" className='btn-lg'><i className='fa fa-check'></i> Done!</Button>
                            <Button variant="danger" className='btn-lg'><i className='fa fa-close'></i> Remove</Button>  
                        </Container>
                        <Card.Text className="card-text">{remainingTime}</Card.Text>
                        <div id="line"></div>
                    </Card.ImgOverlay>
                </CSSTransition>
                <CSSTransition in={hover} unmountOnExit timeout={300} classNames="overlay-animation">
                    <Card.ImgOverlay>
                        <Card.Title style={{padding:'5px 10px'}} className='overlay'>{name}</Card.Title>
                        <Card.Subtitle style={{padding:'5px 10px', color:'black', background:'linear-gradient(to left, white, transparent', textAlign:'right'}} id="subtitle">{category}</Card.Subtitle>
                        <Card.Text style={{padding:'20px 10px 10px 10px', cursor:'default', color:'rgb(219, 217, 217)'}} className='card-text'>Ex do amet esse aliquip voluptate. Labore officia culpa cupidatat tempor laborum 
                            occaecat consectetur quis magna ex est adipisicing. Elit cillum labore ea aliqua qui aliquip
                            quis in id sunt incididunt deserunt exercitation ea. Sunt et id Lorem adipisicing duis consequat
                            quis ad velit cillum non adipisicing sint Lorem. Culpa anim occaecat reprehenderit dolore aute
                            labore ad labore laborum id elit dolore nulla. Veniam dolor in aliquip voluptate laboris dolore.
                        </Card.Text>
                    </Card.ImgOverlay>
                </CSSTransition>
            </Card.ImgOverlay>
            <Card.Footer style={{zIndex:10, backgroundColor:'black'}}>
                <Row>
                    <Col>
                        Deadline: 
                        &nbsp; {deadlineParsed.toDateString()}
                        &nbsp; {String(deadlineParsed.getHours()).padStart(2, '0')} 
                        <span style={{fontSize:'0.7em', position:'absolute', marginLeft:'3px'}}>
                            {String(deadlineParsed.getMinutes()).padStart(2, '0')}
                        </span>
                    </Col>
                    {hover && <Col className='d-flex justify-content-end' xs={3}>
                        <Badge bg="dark" >{remainingTime}</Badge>
                    </Col>}
                </Row> 
            </Card.Footer>
        </Card>
    )
}