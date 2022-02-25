import { Box, Container, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import iconFooter from "../assets/images/icon-footer.png";
import yt from "../assets/images/icon-yt.png";
import face from "../assets/images/icon-face.png";
import twitter from "../assets/images/icon-twitter.png";
import insta from "../assets/images/icon-insta.png";

const Footer = () => {
  return (
    <>
      <Box padding="3rem 0" color="white" bg="#505050">
        <Container maxWidth="90%">
          <Flex
            direction={["column", "column", "row", "row"]}
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex direction={["column", "column", "row", "row"]} gap="3rem">
              <Box textAlign={["center", "center", "start", "start"]}>
                <Divider
                  m={["0 auto 5px", "0 auto 5px", "0 0 9px"]}
                  // mb="9px"
                  bg="white"
                  width="58px"
                  border="1.4px"
                  orientation="horizontal"
                />
                <Text fontWeight={700}>My Account</Text>
                <Text>Overview</Text>
                <Text>Order History</Text>
                <Text>Wishlist</Text>
                <Text>Account information</Text>
              </Box>
              <Box d={["none", "none", "block"]}>
                <Divider
                  mb="9px"
                  bg="white"
                  width="58px"
                  border="1.4px"
                  orientation="horizontal"
                />
                <Text fontWeight={700}>Store</Text>
                <Text>Segurity Notice</Text>
                <Text>Locations & Hours</Text>
                <Text>Rentals</Text>
                <Text>Privacy Notice</Text>
              </Box>
            </Flex>
            <Flex
              mt={1}
              gap={4}
              alignItems={["center", "center", "flex-end", "flex-end"]}
              height="fit-content"
              flexDirection="column"
            >
              <Box
                d={["none", "none", "flex", "flex"]}
                alignItems="center"
                gap="0.6rem"
              >
                <Image src={iconFooter} alt="logo" />
                <Text fontSize={32}>
                  <strong>Central</strong>Music
                </Text>
              </Box>
              <Box gap={3} d="flex" mt={[5, 5, 0, 0]}>
                <Image src={yt} alt="imagen" />
                <Image src={twitter} alt="imagen" />
                <Image src={insta} alt="imagen" />
                <Image src={face} alt="imagen" />
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Flex
        justify={["center", "center", "center", "normal"]}
        color="white"
        bg="#252525"
      >
        <Container maxWidth="90%">
          <Text textAlign={['center','center','start']} p="0.5rem 0">©2021 Music Store</Text>
        </Container>
      </Flex>
    </>
  );
};

export default Footer;
