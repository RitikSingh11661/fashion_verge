import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Order = () => {
  const [order, setOrder] = useState([]);

  return (
    <Box>
      <Text fontSize={"2xl"} fontWeight={"semibold"}>
        Order History
      </Text>
      <Box mt={"1rem"}>
        {order.length > 0 ? (
          order.map((ele) => {
            return <Box key={ele.id}>{ele.title}</Box>;
          })
        ) : (
          <Text>You have no orders placed yet</Text>
        )}
      </Box>
    </Box>
  );
};

export default Order;
