import React, { useState } from "react";
import { Container, Navbar, Nav,} from "react-bootstrap";
import Image from "../assets/images/Vector.png";
import Image2 from "../assets/images/nav-icons.png";


const Navbar2 = () => {
  
  const [Transparent, setTransparent] = useState('transparent')

  

  return (
    <>
      {/* <div className="hero"> */}
      {/* className="header navbar-dark bg-primary" */}
      {/* agregué "navbar-dark bg-primary" en "Navbar" e "image2" de la lina 29 a la 30 */}
      
       {} 
      
      
      <Navbar  bg={Transparent} variant="dark" expand="lg">
        <Container >
          <img src={Image} alt="" />
          <Navbar.Brand href="#home" >Central Music</Navbar.Brand>
          <Navbar.Toggle type="button" onClick={() => setTransparent('dark')} aria-controls="basic-navbar-nav" />

          <Navbar.Collapse type='button'  id="basic-navbar-nav"  >
            <Nav  className="me-auto gap-4" variant="light">
              <Nav.Link  href="#home">Guitars</Nav.Link>
              <Nav.Link  href="#link">Accesories</Nav.Link>
              <Nav.Link  href="#link">Storage</Nav.Link>
              <Nav.Link  href='#link'>Lessons</Nav.Link>
              <Nav.Link  href="#link">Repairs</Nav.Link>
            </Nav>
            <img src={Image2} alt="img" />
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

export default Navbar2;
