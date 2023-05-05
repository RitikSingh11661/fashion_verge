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

      <Box style={{borderBottom:".5px solid grey",display:"flex",justifyContent:"center",gap:"30px",width:"80%",margin:"auto",marginTop:"80px"}}>
        <Text style={{fontWeight:"700",borderBottom:"3px solid black"}}>Product description</Text>
        <Text style={{fontWeight:"700",color:"grey"}}>Shipping & Return</Text>
        <Text style={{fontWeight:"700",color:"grey"}}>Material & care</Text>
      </Box>
      <Box style={{textAlign:"left",width:"80%",margin:"auto",marginTop:"50px",color:'grey',marginBottom:"80px",lineHeight:"30px",
       fontSize:"14px"}}>
        <li>Relax Fit Tee</li>
        <li>Crew Neck</li>
        <li>Rib Finish at Neckline</li>
        <li>Brand Logo Print at the Centre Front</li>
        <li>Premium Quality Fabric</li>
        <li>Model wears size L and is 6'2</li>
      </Box>
      
      </>
      
    </div>
  )
}

export default Singleproductpage
