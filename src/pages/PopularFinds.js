import { Box, Container, Divider, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import Cards from "../components/Cards";
import { popularFinds } from "../data/popularFinds";

const PopularFinds = () => {
  return (
    <Box bg='#ECECEC' p='2rem 0 5rem 0'>
      <Container  mt="3rem" maxWidth="90%">
        <Divider
          m="0 auto"
          width={["58px", "110px", "80px", "58px"]}
          color="#AB0433"
        />
        <Heading color='#505050' textAlign="center">Popular Finds</Heading>
        <Grid
          mt="2rem"
          gap="1rem"
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(3, 1fr)",
          ]}
        >
          <Cards product={popularFinds} />
        </Grid>
      </Container>
    </Box>
  );
};

export default PopularFinds;
