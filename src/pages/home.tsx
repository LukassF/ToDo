import {Container,Row, Col,Modal, CloseButton} from 'react-bootstrap'
import ToDos from '../components/todos'
import AddToDo from '../utilities/addToDo'
import ModalComponent from '../components/modal'
import {useEffect, useState} from 'react'

const toDosArray = [
    {id:1, name:'Create a new website template', deadline:new Date('05/06/2023'), category:'Software Developement', image:"https://uploads-ssl.webflow.com/617b224ba2374548fcc039ba/617b224ba237453ce1c0409b_hpfulq-1234-1024x512.jpg"},
    {id:2, name:'Create a new website template', deadline:new Date('07/20/2024'), category:'Software Developement', image:"https://cms-assets.themuse.com/media/lead/_1200x630_crop_center-center_82_none/01212022-1047259374-coding-classes_scanrail.jpg?mtime=1642798879"},
    {id:3, name:'Create a new website template', deadline:new Date('07/20/2024'), category:'Software Developement', image:"https://cms-assets.themuse.com/media/lead/_1200x630_crop_center-center_82_none/01212022-1047259374-coding-classes_scanrail.jpg?mtime=1642798879"},
    {id:4, name:'Create a new website template', deadline:new Date('07/20/2023'), category:'Software Developement', image:"https://cms-assets.themuse.com/media/lead/_1200x630_crop_center-center_82_none/01212022-1047259374-coding-classes_scanrail.jpg?mtime=1642798879"},
    {id:5, name:'Create a new website template', deadline:new Date('04/10/2024'), category:'Software Developement', image:"https://cms-assets.themuse.com/media/lead/_1200x630_crop_center-center_82_none/01212022-1047259374-coding-classes_scanrail.jpg?mtime=1642798879"},
    {id:6, name:'Create a new website template', deadline:new Date('07/20/2025'), category:'Software Developement', image:"https://cms-assets.themuse.com/media/lead/_1200x630_crop_center-center_82_none/01212022-1047259374-coding-classes_scanrail.jpg?mtime=1642798879"}
]

export default function Home(){
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date())
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        if(update) AddToDo({date, name, category})
    },[update])

    return(
        <Container className='pt-5 ' >
            <Row>
                {toDosArray.map(item => {
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
            {/* <div id="add-button">
                <button onMouseOver={() => {
                    let i = 0
                    let intervalID = setInterval(() => {
                        if(i > 15) clearInterval(intervalID)
                        document.documentElement.style.setProperty('--circle-size',`${35 * i}px`)
                        i++;
                        console.log(i)
                    },1)
                }}
                onMouseLeave={() => {
                    let i = 17
                    let intervalID = setInterval(() => {
                        if(i < 0) clearInterval(intervalID)
                        document.documentElement.style.setProperty('--circle-size',`${35 * i}px`)
                        i--;
                        console.log(i)
                    },1)
                }}
                >Add a To-Do</button>
                <div></div>
            </div> */}

            <button id="add-button" onClick={() => setShow(true)}>+ Add</button>
            <ModalComponent show={show} setShow={setShow} setDate={setDate} setName={setName} setCategory={setCategory} setUpdate={setUpdate}/>
        </Container>
    )
}