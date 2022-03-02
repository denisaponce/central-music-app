import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import Image from "../assets/images/Vector.png";
import Image2 from "../assets/images/nav-icons.png";

const navbar = () => {
  return (
    <>
      {/* <div className="hero"> */}

      <Navbar bg="ligth" variant='dark' expand="lg">
  <Container>
    <img src={Image} alt="" />
    <Navbar.Brand href="#home">Central Music</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" variant='dark'>
      <Nav className="me-auto">
        <Nav.Link href="#home">guitars</Nav.Link>
        <Nav.Link href="#link">accesories</Nav.Link>
        <Nav.Link href="#link">storage</Nav.Link>
        <Nav.Link href="#link">lessons</Nav.Link>
        <Nav.Link href="#link">repair</Nav.Link>
       
      </Nav>
    <img src={Image2} alt="" />
    </Navbar.Collapse>
  </Container>
</Navbar>
      {/* <div>
          <h1>
          FULLFILLINGS dreams whith strings attaches  
          </h1>

        </div>
      </div> */}
    </>
  );
};

export default navbar;
