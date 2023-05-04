import React from 'react'

import { Link,  } from "react-router-dom";
import {IoIosArrowForward} from 'react-icons/io'




import { Box, Text } from "@chakra-ui/react";
const Singleproductpage = () => {
  return (
    <div>
      <>
      <Box display={'flex'} w='100%' m='auto' justifyContent={'center'}>
        <Text fontSize={['10px','10px','14px','16px','16px']}><Link to='/'>Home</Link></Text>
        <Text fontSize={['10px','10px','14px','16px','16px']} mt='3px'><IoIosArrowForward/></Text>
        <Text fontSize={['10px','10px','14px','16px','16px']}><Link to='/product'>all men products</Link></Text>
        <Text fontSize={['10px','10px','14px','16px','16px']} mt='3px'><IoIosArrowForward/></Text>
        
      </Box>
      
      </>
      
    </div>
  )
}

export default Singleproductpage
