import {Card, Row, Col} from "react-bootstrap";
import images from '../data/category-images.json'
import formatDate from "../utilities/formatDate";
import { Draggable } from "react-beautiful-dnd";
import { Status } from "./modal";

type RecentCardsProps = {
    id:number,
    index: number,
    name: string,
    category: string,
    deadline: Date,
    status: Status
}

export default function RecentCards({id,index, name, category, deadline, status}: RecentCardsProps){

    function findIcon(category: string): string{
        let icon:string = ''
        images.images.forEach(item => {
            if(item.category === category) icon = item.icon
        })

        return icon
    }
    return(
        <Draggable draggableId={id.toString()} index={index}>
            {
                (provided, snapshot) => (
                    <Card 
                        className={`pt-3 pb-2 mb-2 ${snapshot.isDragging ? 'dragging' : ''} ${snapshot.isDropAnimating ? 'dropped' : ''}`}
                        id="card-for-grab"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <Row>
                            <Col xs={1} className="d-flex justify-content-center"><i className={findIcon(category)}></i></Col>
                            <Col xs={7}><Card.Title>{name}</Card.Title></Col>
                            <Col className="d-flex justify-content-start align-items-center"><Card.Subtitle className="text-muted" style={{fontSize:'0.8em'}}>{formatDate(deadline)}</Card.Subtitle></Col>
                        </Row>
                        <Row>
                            <Col xs={1}></Col>
                            <Col className="text-muted">{category}</Col>
                        </Row>
                    </Card>
                )
            }
        </Draggable>
    )
}