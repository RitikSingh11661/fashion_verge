import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProductCard = () => {
  return (
    <Box>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box w={"80%"}>
          <Image
            w={"100%"}
            src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/TCCM1699-BLACK1012_800x_ae4006da-33a3-4045-a25f-3a102190576c.jpg?v=1671193508&width=360"
          />
        </Box>
        <Box lineHeight={"1.5rem"}>
          <Box>
            <Text fontSize={"xs"} fontWeight={"semibold"}>
              The Couture Club
            </Text>
          </Box>
          <Box>
            <Text fontSize={"sm"} fontWeight={"semibold"}>
              Couture Applique Varsity Bomber - Black
            </Text>
          </Box>
          <Box>
            <Text fontSize={"sm"}>
              Rs. 7,000.00 Regular price Rs. 10,000.00
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
