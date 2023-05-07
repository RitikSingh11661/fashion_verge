import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    Popover,
    PopoverTrigger,
    Box,
    PopoverContent,
    PopoverHeader,
    PopoverArrow,
    PopoverCloseButton,
    PopoverBody,
  } from '@chakra-ui/react'
import { useState } from 'react'
import { FaHotTub, FaThumbsUp } from 'react-icons/fa'

  function ModalComp() {
     const [text,setText] = useState('')

    const { isOpen, onOpen, onClose } = useDisclosure()
     return (
        <div >
          <Button onClick={onOpen} fontFamily='Objektive' fontSize={'13px'} color='black' bg={'white'} border={'1px solid red'} width='200px' marginLeft={'-10px'}>Chat with us (9AM-6PM)</Button>
  
          <Modal isOpen={isOpen} onClose={onClose}  >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Feel Free To Chat</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            Type Your Concern Here, We will get back to you asap...
            <br />
            <br />
            <Input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Popover isLazy>
              <PopoverTrigger>
               <Button onClick={()=>setText('')} isDisabled={!text}>Submit</Button>
              </PopoverTrigger>
               <PopoverContent>
              <PopoverHeader fontWeight='semibold' color={'green'}><FaThumbsUp/> Responce Submitted</PopoverHeader>
                <PopoverArrow />
                  <PopoverCloseButton />
                     <PopoverBody color={'blue.300'}>Please wait our techy will connect with you soon</PopoverBody>
                </PopoverContent>
          </Popover>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  }


  export default ModalComp;