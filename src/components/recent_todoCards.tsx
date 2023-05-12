import {Table, Card} from "react-bootstrap";
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
    return(
        <Draggable draggableId={id.toString()} index={index}>
            {
                (provided) => (
                    <Card 
                        className="p-2" 
                        style={{cursor:"grab"}}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <Table striped bordered hover style={{marginBottom:'0px'}}>
                            <tbody>
                            <tr>
                                <td>{name}</td>
                                <td>{formatDate(deadline)}</td>
                                <td>{category}<span style={{float:'right', fontSize:'1em'}}><i className="fa fa-trash" style={{cursor:"pointer"}}></i></span></td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card>
                )
            }
        </Draggable>
    )
}