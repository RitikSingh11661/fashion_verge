import { Box, Button, Flex, Heading, IconButton, Image, SimpleGrid, Text, scroll, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";


const ItemsCarousel = () => {
const [index, setIndex] = useState(0);

const woumen=[[{name:"Tops",src:'https://www.koovs.com/cdn/shop/files/tops-01_copy.jpg?v=1667987961&width=533'},{name:"T-Shirts",src:'https://www.koovs.com/cdn/shop/files/Tee-01.jpg?v=1667898427&width=533'},{name:"Shorts",src:'https://www.koovs.com/cdn/shop/files/shorts_women-01.jpg?v=1667898316&width=533'},{name:"Sports Bra",src:'https://www.koovs.com/cdn/shop/files/SBRA2-01.jpg?v=1667988040&width=533'}],[{name:"Leggings",src:'https://www.koovs.com/cdn/shop/files/leggings-01.jpg?v=1667899318&width=533'},{name:"Sweatshirts",src:'https://www.koovs.com/cdn/shop/files/sweats_women-01.jpg?v=1667898406&width=533'},{name:"Leggings",src:'https://www.koovs.com/cdn/shop/products/koovs-15july221376-175.jpg?v=1668174850&width=360'},{name:"Sweatshirts",src:'https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3496-273.jpg?v=1668074409'}]]

const length = 2;

const handlePrevious = () => {
const newIndex = index - 1;
setIndex(newIndex < 0 ? length - 1 : newIndex);
};

const handleNext = () => {
const newIndex = index + 1;
setIndex(newIndex >= length ? 0 : newIndex);
};

 return (
<div className="carousel" style={{color:'black'}}>
    <br />
    <>
    <Heading fontFamily={'SF-Heading-font'} fontWeight={'400'}>Shop Women's</Heading>
    <Flex gap={5} justifyContent={'space-between'} p={'0px 55px'}>
    <IconButton bg={'black'} >
     <Button color="red" _hover={{color:'black',backgroundColor:'red'}} onClick={handlePrevious}>Prev <BiLeftArrowAlt fontSize={'30px'}/></Button>
    </IconButton>
    <IconButton bg={'black'}>
    <Button color="red" _hover={{color:'black',backgroundColor:'red'}} onClick={handleNext}><BiRightArrowAlt fontSize={'30px'}/> Next</Button>
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
       <Button color="red" _hover={{color:'white',backgroundColor:'teal'}} ><BiRightArrowAlt fontSize={'20px'}/></Button>
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

export default ItemsCarousel;