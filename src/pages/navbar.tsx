import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Navbar, NavDropdown, Container, Button} from 'react-bootstrap'

export default function NavbarComponent(){
    return(
        <Navbar bg="dark" expand="md" variant="dark">
            <Container fluid="lg">
                <Navbar.Brand href="#">MyToDos</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse>
                    <Nav style={{marginLeft:"auto"}}>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/trending'>Browse</Nav.Link>
                        <Nav.Link href='/history'>Recent</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}