import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Cards = ({ product }) => {
  
  return (
    <>
      {product?.map((product) => (
        <Box
          d={product.display}
          // mt="2rem"
          m='0 auto 2rem '
          key={product.id}
          backgroundImage={product ? product.background : null}
          bgColor={product ? product.color : null}
          bgRepeat="no-repeat"
          bgSize="cover"
          rounded="10px"
          boxShadow="1px 1px 1px 1px gainsboro"
          width='fit-content'
          overflow="visible"
        >
          <Image
            position="relative"
            top="-22px"
            m="0 auto"
            src={product.image}
            alt="Product"
          />
          <Box
            bg="white"
            display="grid"
            gridTemplateColumns="2fr 1fr"
            gap="1rem"
            p={3.5}
            borderBottomRightRadius="10px"
            borderBottomLeftRadius="10px"
          >
            <Box width="fit-content">
              <Text>{product.title}</Text>
              <Text>{product.description}</Text>
            </Box>
            <Text ml={50}>{product.price}</Text>
            <Text
              px={2}
              bg="white"
              color="gray"
              width="fit-content"
              fontSize={10}
              border="1px solid rgb(233, 221, 221)"
              borderRadius="10px"
            >
              <strong>0</strong> colors available
            </Text>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Cards;
