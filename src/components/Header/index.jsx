import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomNavbar } from './styles';

export function Header() {
    return (
        <CustomNavbar>
            <Navbar expand="lg" className="bg-transparent position-relative z-3">
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />

                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-lg"
                        aria-labelledby="offcanvasNavbarLabel-expand-lg"
                        placement="end"
                        className="bg-dark text-white" // 👈 Fundo preto e texto branco
                    >
                        <Offcanvas.Header closeButton closeVariant="white">
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg" className="text-white">
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 gap-4 p-2">
                                <Nav.Link href="#" className="text-white">Home</Nav.Link>
                                <Nav.Link href="#" className="text-white">Portfólio</Nav.Link>
                                <Nav.Link href="#" className="text-white">Contato</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </CustomNavbar>
    );
}
