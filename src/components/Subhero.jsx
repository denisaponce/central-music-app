import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import img from "../assets/images/bg-subhero.png";

const Subhero = () => {
  return (
    <>
      <Box
        className="subhero-bg"
        d="flex"
        alignItems="center"
        justifyContent="center"
        maxWidth="90%"
        m="-120px auto 0"
        h={240}
        bgImage={img}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        borderRadius="0.5rem"
        bgColor='#AB0433'
        backgroundBlendMode='multiply'
        
      >
        <Box textAlign="center">
          <Heading
            m="0 auto"
            w={[null, "360px", "600px", "600px"]}
            fontSize={["40px", "40px", "46px", "46px"]}
            color="white"
          >
            FREE GUITAR LESSONS!{" "}
          </Heading>
          <Text
            m="0 auto"
            w={["200px", "200px", "490px", "490px"]}
            fontSize={["13px", "13px", "24px", "24px"]}
            color="white"
            fontWeight="400"
          >
            Purchase any guitar over $499.99 and recieve a one-hour guitar
            lesson free.{" "}
          </Text>
          <Button colorScheme="orange" mt="1rem" borderRadius="1.3rem">
            LEARN MORE
          </Button>
        </Box>
      </Box>

      {/* <Box p="3rem 0">
        <Container maxWidth="90%">
          <Flex>
            <Heading>Hola</Heading>
          </Flex>
        </Container>
      </Box> */}
    </>
  );
};

export default Subhero;
