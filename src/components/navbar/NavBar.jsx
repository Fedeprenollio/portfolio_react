import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Outlet } from 'react-router-dom';

export function NavBar() {
  return (
    <div className='container-fluid m-0 p-0'>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Federico Prenollio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link  as={NavLink} to="/works">Trabajos</Nav.Link>
            <Nav.Link  as={NavLink} to="/contact">Contacto</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
        <Outlet></Outlet>
    </section>
    </div>
  );
}

