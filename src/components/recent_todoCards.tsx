import {Table, Card} from "react-bootstrap";
import formatDate from "../utilities/formatDate";

type RecentCardsProps = {
    name: string,
    category: string,
    deadline: Date
}

export default function RecentCards({name, category, deadline}: RecentCardsProps){
    return(
        <Card className="p-2"  draggable="true" style={{cursor:"grab"}}>
            <Table striped bordered hover style={{marginBottom:'0px'}}>
                <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{formatDate(deadline)}</td>
                    <td>{category}<span style={{float:'right'}}><i className="fa fa-trash" style={{cursor:"pointer"}}></i></span></td>
                </tr>
                </tbody>
            </Table>
        </Card>
    )
}