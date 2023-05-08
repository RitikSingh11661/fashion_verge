import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Whishlist = () => {
  const [item, setItem] = useState([]);

  return (
    <Box>
      <Box>
        <Text fontSize={"2xl"} fontWeight={"semibold"}>
          Wishlist
        </Text>
      </Box>
      {item.length > 0 ? (
        item.map((ele) => {
          return <Flex></Flex>;
        })
      ) : (
        <Box>
          You have no products added to Wishlist.{" "}
          <Link to={"/"}>Continue Shopping</Link>
        </Box>
      )}
    </Box>
  );
};

export default Whishlist;
