import { Box, Button, Flex, Heading, IconButton, Image, Radio, RadioGroup, SimpleGrid, Stack, Text, scroll, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


const MensCarousel = () => {
const [index, setIndex] = useState(0);
// console.log(value)

const woumen=[[{name:"T-Shirts",src:'https://www.koovs.com/cdn/shop/files/Untitled-6-01.jpg?v=1667985899&width=533'},{name:"Jockets",src:'https://www.koovs.com/cdn/shop/files/KOOVS_20OCT22-1025.jpg?v=1667897521&width=533'},{name:"Pants",src:'https://www.koovs.com/cdn/shop/files/KOOVS_20OCT22-0291.jpg?v=1667985664&width=533'},{name:"Shorts",src:'https://www.koovs.com/cdn/shop/files/shortsn-01.jpg?v=1667897412&width=533'}],[{name:"Sweatshirts",src:'https://www.koovs.com/cdn/shop/files/ball_sweatshirt-01.jpg?v=1668170499&width=533'},{name:"Accessories",src:'https://www.koovs.com/cdn/shop/files/unisex_accessories-01.jpg?v=1668170734&width=533'},{name:"Sweatshirts",src:'https://www.koovs.com/cdn/shop/files/templateforproducts-07_5cc40349-551f-4f3b-a4a7-90131b9e4de1.jpg?v=1682678612&width=360'},{name:"Accessories",src:'https://www.koovs.com/cdn/shop/products/1_341ec792-2448-4128-8690-028b164591ca.jpg?v=1681214005&width=360'}]]

const length = 2;

const handlePrevious = () => {
const newIndex = index - 1;
setIndex(newIndex < 0 ? length - 1 : newIndex);
};

const handleNext = () => {
const newIndex = index + 1;
setIndex(newIndex >= length ? 0 : newIndex);
};

const navigate=useNavigate();
const handleViewAll=()=>{
    navigate('/products')
}

 return (
<div className="carousel" style={{color:'black'}}>
    <br />
    <>
    <Heading fontFamily={'SF-Heading-font'} fontWeight={'400'}>Shop Men's</Heading>
    <Flex gap={5} justifyContent={'space-between'} p={'0px 55px'}>
    <IconButton bg={'black'} >
     <Button color="red" _hover={{color:'black',backgroundColor:'red'}} onClick={handlePrevious}><BiLeftArrowAlt fontSize={'30px'}/></Button>
    </IconButton>

    {/* <RadioGroup defaultValue='0' bg={'grey'} border={'1px solid green'}>
    <Stack spacing={2} direction='row'>
    <Radio outline={'red'} colorScheme='red' value='0'>
    </Radio>
    <Radio colorScheme='red' value='1'>
    </Radio>
    </Stack>
    </RadioGroup> */}

    <IconButton bg={'black'}>
    <Button color="red" _hover={{color:'black',backgroundColor:'red'}} onClick={handleNext}><BiRightArrowAlt fontSize={'30px'}/></Button>
    </IconButton>
    </Flex>

    <Flex mr={'20px'} alignItems={'center'} ml={'20px'} justify={'space-between'}>

   <SimpleGrid columns={[2,2,4,4]} p={'30px'} border={'0px solid red'} alignContent={'center'} gap={5}>
       {woumen[index]?.map((el)=>(
        <Box _hover={{width:'101%',boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'}} borderRadius={'16px'} width={'100%'} boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}>
        <Image borderTopRadius={'16px'} src={el.src} alt={el.name}/>
        <Flex justify={'space-between'} padding={'15px'} alignItems={'center'}>
        <Heading textAlign={'left'} fontSize={'19px'} fontFamily={'SF-Heading-font'} fontWeight={'500'} color={'black'}>{el.name}</Heading>
        <IconButton bg={'black'}>
       <Button color="red" _hover={{color:'white',backgroundColor:'teal'}} onClick={handleViewAll}><BiRightArrowAlt fontSize={'20px'}/></Button>
    </IconButton>
        </Flex>
        </Box>
       ))}
    </SimpleGrid>
    </Flex>
    </>
</div>
);
};

export default MensCarousel;
