import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Navbar, Container} from 'react-bootstrap'

export default function NavbarComponent(){
    return(
        <Navbar bg="dark" expand="md" variant="dark">
            <Container fluid="lg">
                <Navbar.Brand href="#">Taskify</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse>
                    <Nav style={{marginLeft:"auto"}}>
                        <Nav.Link href='/todo-app/'>Home</Nav.Link>
                        <Nav.Link href='/todo-app/about/'>About</Nav.Link>
                        <Nav.Link href='/todo-app/history/'>Recent</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}