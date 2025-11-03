import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <strong>DriveTech</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#services">Serviços</Nav.Link>
            <Nav.Link href="#features">Diferenciais</Nav.Link>
            <Nav.Link href="#instructors">Instrutores</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
            <Button variant="outline-success" className="ms-lg-3">Matricule-se Já</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Header;