import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

import Image from "../assets/images/Vector.png";
import cart from '../assets/images/cart.png';
import profile from '../assets/images/profile.png';

// import Image2 from "../assets/images/nav-icons.png";
const Navbar2 = () => {
  const [Transparent, setTransparent] = useState(false);

  return (
    <>
      <Box bg='#212529'>
        <Navbar bg={Transparent ? "dark" : "transparent"} expand="lg">
          <Container color="white">
            {/* <img src={Image} alt="" />
            <Link to="/">Central Music</Link> */}
            <Link to='/'>
              <Box mr='2rem' d='flex' gap='0.6rem' alignItems='center'>
                <img src={Image}/>
                <Text color='white' fontSize='20px'><strong>Central</strong> Music</Text>
              </Box>
            </Link>
            <Navbar.Toggle
              type="button"
              onClick={() => setTransparent(!Transparent)}
              aria-controls="basic-navbar-nav"
            />

            <Navbar.Collapse type="button" id="basic-navbar-nav">
              <Nav className="me-auto gap-5 text-white">
                <Link to="/guitars">Guitars</Link>
                <Link to="/accessories">Accessories</Link>
                <Link to="/storage">Storage</Link>
                <Link to="lessons">Lessons</Link>
                <Link to="repairs">Repairs</Link>
              </Nav>
              <Box d='flex' gap='1rem'>
                <Link to='/cart'><img src={cart} alt="img" /></Link>
                <Link to='/profile'><img src={profile} alt="img" /></Link>
              </Box>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Box>

    </>
  );
};

export default Navbar2;
