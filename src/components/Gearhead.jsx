import { Divider, Container, Heading, Box, } from "@chakra-ui/react";
import React from "react";
import { gearhead } from "../data/gearhead";
import ArticleCard from "./ArticleCard";


const Gearhead = () => {
  return (
    <>
      <Container pb='4rem' mt="4rem" maxWidth="90%">
        <Divider
        m="0 auto"
        width={["58px", "110px", "80px", "58px"]}
        color="#AB0433"
        />
        <Heading mb='3rem' color='#505050' textAlign="center">Gear Head</Heading>
        <Box d={['block','grid','grid','grid']} gridTemplateColumns={['1fr','1fr','repeat(6,1fr)','repeat(6,1fr)']} gap='2rem' m='0 auto'>
          <ArticleCard article={gearhead}/>
        </Box>
      </Container>
    </>

  );
};

export default Gearhead;
