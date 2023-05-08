import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Order from "../Components/Order";
import Address from "../Components/Address";
import Whishlist from "./Whishlist";
import Logout from "../Components/Logout";

const infoArr = ["Dashboard", "Addresses", "Wishlist", "Logout"];

const Dashboard = () => {
  const [tab, setTab] = useState(1);
  return (
    <Box>
      <Heading>{infoArr[tab - 1]}</Heading>
      <Box
        display={"flex"}
        h="80%"
        mt={"3rem"}
        justifyContent={"center"}
        gap={"6rem"}
      >
        <Box
          display={"flex"}
          borderRight={"1px solid black"}
          p={"1rem"}
          flexDirection={"column"}
          gap={"1rem"}
          bg="white"
        >
          {infoArr.map((ele, ind) => {
            return (
              <Box key={ind} onClick={() => setTab(ind + 1)}>
                <Text cursor={"pointer"} fontWeight={"medium"}>
                  {ele}
                </Text>
              </Box>
            );
          })}
        </Box>
        <Box>
          {tab === 1 ? (
            <Order />
          ) : tab === 2 ? (
            <Address />
          ) : tab === 3 ? (
            <Whishlist />
          ) : tab === 4 ? (
            <Logout />
          ) : (
            ""
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
