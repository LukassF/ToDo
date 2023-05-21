// import { actions } from "../data/redux_store"
// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import type { RootState, AppDispatch } from '../data/redux_store'
// import { Status } from "../components/modal"

import { Button, Col, Container, Row } from "react-bootstrap";


export default function About(){
    // const agenda = useAppSelector((state) => state.agenda.agenda)
    // const dispatch = useAppDispatch()
    // const increment = () => {
    //     dispatch(actions.add({name:"Dawg", deadline:new Date(),category:'shopping',image:'', status:Status.completed}))
    // }
   
    return(
        <div id="about-background">
        {/* <h1>{agenda.map(item => item.id)}</h1>
        <button onClick={increment}>+</button> */}
            <Container id="about-container">
                <Row>
                    <Col xs={12} lg={5}><h1>About Us!</h1></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col xs={12} lg={5}><p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eius aperiam tempora perferendis impedit, fugiat quasi ipsa excepturi asperiores ab deserunt 
                            harum quae vero doloremque corporis, recusandae esse molestiae a est.</p>
                    </Col>
                    <Col></Col>  
                </Row>
                <Row>
                    <Col xs={12} lg={5}><Button size="lg" variant="secondary" className="w-100 mt-3">Click here and learn more!</Button></Col>
                    <Col></Col>
                </Row>
            </Container>
            <img src="https://assets.website-files.com/5bff8886c3964a992e90d465/5c00621b7aefa4f9ee0f4303_wide-shot.svg" width="1700px" id="about-image" />

        </div>
    )
}