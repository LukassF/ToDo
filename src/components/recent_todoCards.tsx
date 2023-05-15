import {Card, Row, Col} from "react-bootstrap";
import images from '../data/category-images.json'
import formatDate from "../utilities/formatDate";
import { Draggable } from "react-beautiful-dnd";

type RecentCardsProps = {
    id:number,
    index: number,
    name: string,
    category: string,
    deadline: Date
}

export default function RecentCards({id,index, name, category, deadline}: RecentCardsProps){

    function findIcon(category:string): string{
        let icon:string = ''
        images.images.forEach(item => {
            if(item.category === category) icon = item.icon
        })

        return icon
    }
    return(
        <Draggable draggableId={id.toString()} index={index}>
            {
                (provided) => (
                    <Card 
                        className="pt-3 pb-2 mb-2"
                        id="card-for-grab"
                        bg='dark'
                        style={{cursor:"grab", zIndex:'2'}}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <Row>
                            <Col xs={1}><i className={findIcon(category)}></i></Col>
                            <Col><Card.Title>{name}</Card.Title></Col>
                            <Col className="d-flex justify-content-center align-items-center"><Card.Subtitle className="text-muted" style={{fontSize:'0.8em'}}>{formatDate(deadline)}</Card.Subtitle></Col>
                        </Row>
                    </Card>
                )
            }
        </Draggable>
    )
}