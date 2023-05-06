import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

const AddressModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button onClick={onOpen}>Add a New address</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Save Your address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Text>Country</Text>
              <Input placeholder="Country" required />
              <Text>First Name</Text>
              <Input placeholder="First Name" />
              <Text>Last Name</Text>
              <Input placeholder="Last Name" />
              <Text>Company</Text>
              <Input placeholder="Company" />
              <Text>Address</Text>
              <Input placeholder="Address" />
              <Text>City</Text>
              <Input placeholder="City" />
              <Text>ZipCode</Text>
              <Input placeholder="ZipCode" />
              <Text>Phone</Text>
              <Input placeholder="Phone" />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
            <Button variant="ghost">Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AddressModal;
