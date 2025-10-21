import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomNavbar } from './styles';

export function Header() {
    return (
        <>
            <CustomNavbar>
                <Navbar expand="lg" className="bg-transparent position-relative z-2">
                    <Container fluid>
                        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar-expand-lg"
                            aria-labelledby="offcanvasNavbarLabel-expand-lg"
                            placement="end"
                        >
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 gap-4 p-2">
                                    <Nav.Link href="#" className="text-light">Home</Nav.Link>
                                    <Nav.Link href="#" className="text-light">Portfólio</Nav.Link>
                                    <Nav.Link href="#" className="text-light">Contato</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </CustomNavbar>
        </>
    );
}