import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <>
      {article?.map((article) => (
        <Box
          mb={['3rem','3rem','0','0']}
          color="white"
          h="fit-content"
          gridColumn={article.grid}
          d={article.display}
          key={article.id}
        >
          <Image width='100%' src={article.image} />
          <Box borderBottomRadius='5px' bg={article.bg}>
            <Text fontSize='24px' fontWeight={700} >{article.title}</Text>
            <Text>{article.description}</Text>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ArticleCard;
