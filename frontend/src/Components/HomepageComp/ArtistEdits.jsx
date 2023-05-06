import { Box, Button, Flex, Heading, IconButton, Image, SimpleGrid, Text, scroll, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import {Link} from "react-scroll"

const ArtistEdits= () => {
const [index, setIndex] = useState(0);

const newArr=[[{brand:"KOOVS",name:"Never Let You Go T-shirt",price:"1690",src:'https://cdn.shopify.com/s/files/1/0677/1464/6315/products/front_6420a0b9-a9ed-4fc8-81ca-d0e54c1a1a4f.png?v=1675427632&width=600'},{brand:"KOOVS",name:"The Ritual Tie & Dye Oversized T",price:"1490",src:'https://cdn.shopify.com/s/files/1/0677/1464/6315/products/ritualc.jpg?v=1679580670&width=600'},{brand:"KOOVS",name:"The Ritual Oversized T-shirt - Unisex",price:"1490",src:'https://cdn.shopify.com/s/files/1/0677/1464/6315/products/ritual2.jpg?v=1679580135&width=600'},{brand:"KOOVS",name:"Boomranng Bucket Hat",price:"990",src:'https://www.koovs.com/cdn/shop/products/GF2-03_00bee238-6ca5-4eb5-867f-e1f2c78136a1.jpg?v=1682329468&width=360'}],
[{brand:"KOOVS",name:"Orange Soda Gang Hoodie",price:"2290",src:'https://www.koovs.com/cdn/shop/products/back_ebb860a3-90c3-45d8-9e06-647d79cf457b.png?v=1682847346&width=360'},{brand:"KOOVS",name:"Say Yes to Nugs Long T",price:"1890",src:'https://cdn.shopify.com/s/files/1/0677/1464/6315/files/backpsd_8beba887-54bc-4b87-9f32-91ebed9c8589.png?v=1682847781&width=600'},{brand:"KOOVS",name:"Bless My Feed Hoodie",price:"2290",src:'https://cdn.shopify.com/s/files/1/0677/1464/6315/products/front_d96474c0-bd55-41ce-8d38-7e13404dbd3b.png?v=1675420104&width=600'},{brand:"KOOVS",name:"Coin All Over Print T-Shirt",price:"1890",src:'https://cdn.shopify.com/s/files/1/0677/1464/6315/products/product2400x3200_9a85da36-50f0-4368-8570-aad4dc3eeb26.png?v=1675426440&width=600'}]]

const handlePrevious = (val) => {
setIndex(val);
};

const handleNext = (val) => {
setIndex(val);
};

 return (
<div className="carousel" style={{color:'black'}}>
    <br />
    <>
    <Heading fontFamily={'SF-Heading-font'} fontSize={'42px'} fontWeight={'500'}>Artist Edits</Heading>
    <Flex gap={5} justify={'center'} alignItems={'center'} p={'0px 55px'}>
    <IconButton >
     <Text bg={'white'} border={'none'} fontSize={'14px'} color={(index==1)?"red":"grey"} textDecoration={(index==0)?'underline':"none"} _hover={{color:'black'}} onClick={()=>handlePrevious(0)}>Koovs x Boomranng</Text>
    </IconButton>
    <Text>|</Text>
    <IconButton >
    <Text color={(index==0)?"red":"grey"} bg={'white'} fontSize={'14px'} textDecoration={(index==1)?'underline':"none"} _hover={{color:'black'}} onClick={()=>handleNext(1)}>Koovs x George Thomas</Text>
    </IconButton>
    </Flex>

    <Flex mr={'20px'} alignItems={'center'} ml={'20px'} justify={'space-between'}>

   <SimpleGrid columns={[2,2,4,4]} p={'20px'} border={'0px solid red'} alignContent={'center'} gap={5}>
       {newArr[index]?.map((el)=>(
        <Box _hover={{width:'101%',boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'}} borderRadius={'16px'} width={'100%'} boxShadow={'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}>
        <Image borderTopRadius={'16px'} src={el.src} alt={el.name}/>
        {/* <Heading pl={'15px'} textAlign={'left'}  fontSize={'11px'} color={'grey'}>{el.brand}</Heading> */}
        <Flex justify={'space-between'} padding={'15px'} alignItems={'center'}>
        <Heading textAlign={'left'}  fontSize={'16px'} color={'black'}>{el.name}</Heading>
        <IconButton bg={'black'}>
       <Button color="red" _hover={{color:'white',backgroundColor:'teal'}} onClick={handleNext}><BiRightArrowAlt fontSize={'20px'}/></Button>
       </IconButton>
        </Flex>
        <Heading pl={'15px'} pb={'10px'} textAlign={'left'}  fontSize={'14px'} color={'grey'}>Rs. {el.price}.00</Heading>
        </Box>
       ))}
    </SimpleGrid>
    </Flex>
    <Button bg={'black'} color={'white'} _hover={{bg:'grey', color:"black"}}>View all</Button>
    </>
</div>
);
};

export default ArtistEdits;