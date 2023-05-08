import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ProductCard from './../Components/ProductCard';


const ProductPage = () => {
  return (
    <Box>
      <Flex>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Flex>
    </Box>
  );
};

export default ProductPage;
