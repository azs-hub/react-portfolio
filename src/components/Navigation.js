import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import data from "../shared_data"

const Navigation = () => {
  return (
    <Navbar bg="light" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#home">{data.title} <span>Portfolio</span></Navbar.Brand>
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
        >
          <Nav.Link href="#experiences">Work</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#experiences">Experiences</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
