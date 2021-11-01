import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import data from "../shared_data"

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#home">{data.title} <span>Portfolio</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#resume">Experiences</Nav.Link>
            <Nav.Link href="#languages">Languages</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
