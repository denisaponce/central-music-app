import { Divider, Container, Heading, Box, } from "@chakra-ui/react";
import React from "react";
import { gearhead } from "../data/gearhead";
import ArticleCard from "./ArticleCard";
// import image1 from "../assets/images/gearhead1.png";
// import image2 from "../assets/images/gearhead2.png";
// import image3 from "../assets/images/gearhead3.png";
// import image4 from "../assets/images/gearhead4.png";
// import image5 from "../assets/images/gearhead5.png";

const Gearhead = () => {
  return (
    <>
      <Container pb='4rem' mt="3rem" maxWidth="90%">
        <Divider
        m="0 auto"
        width={["58px", "110px", "230px", "58px"]}
        color="#AB0433"
        />
        <Heading color='#505050' textAlign="center">Gear Head</Heading>
        <Box d={['block','grid','grid','grid']} gridTemplateColumns={['1fr','1fr','repeat(6,1fr)','repeat(6,1fr)']} gap='2rem' m='0 auto'>
          <ArticleCard article={gearhead}/>
          {/* <Box gridColumn='1 / 4'>
            <Image src={image1} />
              <Box>
              <Heading>Article</Heading>
              <Text>Article subhead</Text>
            </Box>
          </Box>
          <Box gridColumn='4 / 7' >
            <Image src={image2} />
              <Box>
              <Heading>Article</Heading>
              <Text>Article subhead</Text>
            </Box>
          </Box>
          <Box gridColumn='1 / 3' >
            <Image src={image3} />
              <Box>
              <Heading>Article</Heading>
              <Text>Article subhead</Text>
            </Box>
          </Box>
          <Box gridColumn='3 / 5' >
            <Image src={image4} />
              <Box>
              <Heading>Article</Heading>
              <Text>Article subhead</Text>
            </Box>
          </Box>
          <Box gridColumn='5 / 7' >
            <Image src={image5} />
              <Box>
              <Heading>Article</Heading>
              <Text>Article subhead</Text>
            </Box>
          </Box> */}
        </Box>
      </Container>
    </>

  );
};

export default Gearhead;
