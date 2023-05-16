import {Card, Button, Container, Row, Col, Badge} from 'react-bootstrap'
import {useState,useEffect, createRef} from 'react'
import { CSSTransition } from 'react-transition-group'
import calculateTime from '../utilities/calculateTime'
import { Status } from './modal'
import changeStatus from '../utilities/changeStatus'
import formatDate from '../utilities/formatDate'

export type ToDosProps = {
    id:number,
    name:string,
    deadline: Date,
    category: string,
    image: string,
    status:Status
}

export default function ToDos({id, name, deadline, category, image,status}: ToDosProps){
    const [hover,setHover] = useState(false)
    const [remainingTime, setRemainingTime] = useState('')
    const [statusState,setStatus] = useState<Status>(Status.unresolved)
    const deadlineParsed: Date = new Date(deadline)
    const CardRef = createRef<HTMLDivElement>();

    useEffect(() => {
        calculateTime({deadline: deadlineParsed, setState: setRemainingTime, setStatus})
        setInterval(() => calculateTime({deadline: deadlineParsed, setState: setRemainingTime, setStatus}),60000)
    },[])

    useEffect(() => {
        if(window.localStorage.getItem('agenda') && statusState !== Status.unresolved && CardRef.current){
            changeStatus({statusState: statusState,id: id,array:  JSON.parse(window.localStorage.getItem('agenda') || '[]')})
            CardRef.current.classList.add('changed')
            setTimeout(() => {
                window.location.reload()
            },1500)
        }
    },[statusState])
    
    let timeoutID: number;
    return(
        <Card 
            ref={CardRef}
            className='mb-3' 
            key={id}
            id="card" 
            onMouseEnter={() => {
                window.clearTimeout(timeoutID)
                timeoutID = window.setTimeout(() => setHover(true),1500)
            }} 
            onMouseLeave={() => {
                window.clearTimeout(timeoutID)
                setHover(false)
            }}
            onTouchStart={()=> {
                window.clearTimeout(timeoutID)
                timeoutID = window.setTimeout(() => setHover(true),1500)
                console.log('started')
            }}
            onTouchEnd={()=> {
                window.clearTimeout(timeoutID)
                setHover(false)
                console.log('ended')
            }}>
            <Card.Img id="card-image" style={{backgroundImage:`url(${image})`}}></Card.Img>
            <Card.ImgOverlay style={{background:'rgba(0,0,0,0.7)'}}>
                <CSSTransition in={!hover} unmountOnExit timeout={300} classNames="overlay-animation">
                    <Card.ImgOverlay>
                        <Card.Title style={{padding:'0px 10px'}} className="overlay">{name}</Card.Title>
                        <Container id="container">
                            <Button onClick={() => setStatus(Status.completed)}><i className='fa fa-check'></i> Done!</Button>
                            <Button onClick={() => setStatus(Status.failed)}><i className='fa fa-close'></i> Remove</Button>  
                        </Container>
                        <Card.Text className="card-text">{remainingTime}</Card.Text>
                        <div id="line"></div>
                    </Card.ImgOverlay>
                </CSSTransition>
                <CSSTransition in={hover} unmountOnExit timeout={300} classNames="overlay-animation">
                    <Card.ImgOverlay>
                        <Card.Title style={{padding:'5px 10px'}} className='overlay'>{name}</Card.Title>
                        <Card.Subtitle style={{padding:'5px 10px',borderRadius:'4px', color:'black', background:'rgba(255,255,255,0.7)', textAlign:'right'}} id="subtitle">{category}</Card.Subtitle>
                        <Card.Text style={{padding:'20px 10px 10px 10px', cursor:'default', color:'rgb(219, 217, 217)'}} className='card-text'>Ex do amet esse aliquip voluptate. Labore officia culpa cupidatat tempor laborum 
                            occaecat consectetur quis magna ex est adipisicing. Elit cillum labore ea aliqua qui aliquip
                            quis in id sunt incididunt deserunt exercitation ea. Sunt et id Lorem adipisicing duis consequat
                            quis ad velit cillum non adipisicing sint Lorem. Culpa anim occaecat reprehenderit dolore aute
                            labore ad labore laborum id elit dolore nulla. Veniam dolor in aliquip voluptate laboris dolore.
                        </Card.Text>
                    </Card.ImgOverlay>
                </CSSTransition>
            </Card.ImgOverlay>
            <Card.Footer style={{zIndex:10, backgroundColor:'black'}} id="todo-footer">
                <Row>
                    <Col>
                        Deadline: 
                        {formatDate(deadline)}
                    </Col>
                    {hover && <Col className='d-flex justify-content-end' xs={3}>
                        <Badge bg="dark" >{remainingTime}</Badge>
                    </Col>}
                </Row> 
            </Card.Footer>
        </Card>
    )
}