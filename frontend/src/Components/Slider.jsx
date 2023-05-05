import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Checkbox,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

const Slider = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box>
      <Button ref={btnRef}  bg="transparent" onClick={onOpen}>
        Filter <BiChevronDown />
      </Button>
      
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filters</DrawerHeader>

          <DrawerBody>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Price
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RangeSlider
                    aria-label={["min", "max"]}
                    defaultValue={[10, 30]}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                  </RangeSlider>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Size
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Checkbox>XXS</Checkbox>
                    <Checkbox>XS</Checkbox>
                    <Checkbox>S</Checkbox>
                    <Checkbox>M</Checkbox>
                    <Checkbox>L</Checkbox>
                    <Checkbox>XL</Checkbox>
                    <Checkbox>XXL</Checkbox>
                    <Checkbox>XXXL</Checkbox>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Brand
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Checkbox>Bravesoul</Checkbox>
                    <Checkbox>Comatoes</Checkbox>
                    <Checkbox>Koovs</Checkbox>
                    <Checkbox>Koovs Sport</Checkbox>
                    <Checkbox>NIKE</Checkbox>
                    <Checkbox>Nike</Checkbox>
                    <Checkbox>Public Desire</Checkbox>
                    <Checkbox>The Couture Club</Checkbox>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Availability
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Checkbox>In Stock</Checkbox>
                    <Checkbox>Out Stock</Checkbox>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Slider;
