import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import AddressModal from "./AddressModal";

const Address = () => {
  const [address, setAddress] = useState([]);

  return (
    <Box>
      <Text fontSize={"2xl"} fontWeight={"semibold"}>
        Your Address
      </Text>
      <Box>
        <AddressModal />
      </Box>
      <Box>
        {address.length > 0
          ? address.map((ele) => {
              return <Box></Box>;
            })
          : ""}
      </Box>
    </Box>
  );
};

export default Address;
