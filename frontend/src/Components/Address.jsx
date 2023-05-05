import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const Address = () => {
  return (
    <Box>
      <Text fontSize={"2xl"} fontWeight={"semibold"}>
        Your Address
      </Text>
      <Box>
        <Button>Add a New address</Button>
      </Box>
    </Box>
  );
};

export default Address;
