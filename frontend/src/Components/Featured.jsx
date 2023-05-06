import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
  } from "@chakra-ui/react";
  import React from "react";
  
  const Featured = () => {
    return (
      <Box>
        <Accordion defaultIndex={[0]} w={"11rem"} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Featured
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
                <Button>Alphabetically, A-Z</Button>
                <Button>Alphabetically, Z-A</Button>
                <Button>Price, low to high</Button>
                <Button>Price, high to low</Button>
                <Button>Date, old to new</Button>
                <Button>Date, new to old</Button>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    );
  };
  
  export default Featured;