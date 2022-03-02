import { Divider, Heading } from "@chakra-ui/react";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import image1 from "../assets/images/gearhead1.png";
import image2 from "../assets/images/gearhead2.png";
import image3 from "../assets/images/gearhead3.png";
import image4 from "../assets/images/gearhead4.png";
import image5 from "../assets/images/gearhead5.png";

const Gearhead = () => {
  return (
    <div>
      <Divider
        m="0 auto"
        width={["58px", "110px", "80px", "58px"]}
        color="#AB0433"
      />
      <Heading color="#505050" textAlign="center" mt="3rem" mb='2rem'>
        Gear Head
      </Heading>
       <div className="center">
      <Container>

          <Row>
            <Col>
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title>Aqui va el Titulo </Card.Title>
                  <Card.Text>y aquí un subtitulo xd</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={image2} />
                <Card.Body>
                  <Card.Title>Aqui va el Titulo </Card.Title>
                  <Card.Text>y aquí un subtitulo xd</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image3} />
                <Card.Body>
                  <Card.Title>Aqui va el Titulo </Card.Title>
                  <Card.Text>y aquí un subtitulo xd</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image4} />
                <Card.Body>
                  <Card.Title>Aqui va el Titulo </Card.Title>
                  <Card.Text>y aquí un subtitulo xd</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image5} />
                <Card.Body>
                  <Card.Title>Aqui va el Titulo </Card.Title>
                  <Card.Text>y aquí un subtitulo xd</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      
      </Container> 
       </div>
    </div>
  );
};

export default Gearhead;
