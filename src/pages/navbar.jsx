import React from 'react'
import { Container, Navbar , NavDropdown , Nav} from 'react-bootstrap'
import Image from '../assets/images/Vector.png'
import Image2 from '../assets/images/nav-icons.png'



const navbar = () => {
  return (
<>
    {/* <div className="hero"> */}

    <Navbar className='header' bg="dark" variant ='dark' expand="lg">
  <Container className='flex'>
    <img  src={Image} alt="" />
    <Navbar.Brand href="#home">Central Music</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Guitars</Nav.Link>
        <Nav.Link href="#link">Accesories</Nav.Link>
        <Nav.Link href="#link">Storage</Nav.Link>
        <NavDropdown title="Lessons" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Basic</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Middle </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Hard</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">IDK</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Rrepair</Nav.Link>
        <img src={Image2} alt="" />

      </Nav>
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

  )
}

export default navbar