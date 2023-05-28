import { Box, Button, Flex, Heading, IconButton, Image, SimpleGrid, Text, scroll, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";


const NewArrivals= () => {
const [index, setIndex] = useState(0);

const newArr=[[{brand:"KOOVS",name:"Retrograde HS Shirt",price:"1590",src:'https://cdn.shopify.com/s/files/1/0677/1464/6315/products/templateforpgrgrroducts-11.jpg?v=1679657711&width=600'},{brand:"KOOVS",name:"Data T-Shirt",price:"790",src:'https://www.koovs.com/cdn/shop/files/templateforproduzxzzxcts-01.jpg?v=1682587354&width=360'},{brand:"KOOVS",name:"Retrograde Jogger",price:"1690",src:'https://www.koovs.com/cdn/shop/files/templateforpnnroductsxx-11-03.jpg?v=1682588777&width=360'},{brand:"KOOVS",name:"Retrograde Shorts",price:"1290",src:'https://www.koovs.com/cdn/shop/files/templateforproductsc-09.jpg?v=1682588049&width=360'},{brand:"KOOVS",name:"Retrograde Sweatshirt",price:"1290",src:'https://www.koovs.com/cdn/shop/files/templateforproducssds-04.jpg?v=1682589001&width=360'},{brand:"KOOVS",name:"Retrograde Bomber Jacket",price:"1990",src:'https://www.koovs.com/cdn/shop/files/templateforproductsc-09.jpg?v=1682588049&width=360'}],
[{brand:"KOOVS",name:"Oscars T-Shirt",price:"790",src:'https://cdn.shopify.com/s/files/1/0677/1464/6315/products/templateforprdcdssoducts-11.jpg?v=1680011265&width=600'},{brand:"KOOVS",name:"Wharf Loose Fit Cargo Short",price:"1290",src:'https://www.koovs.com/cdn/shop/files/templateforproducts-01_f944fa6e-ad60-4455-b2bb-1258d7e5a749.jpg?v=1682678061&width=360'},{brand:"KOOVS",name:"Higher Places T-Shirt",price:"990",src:'https://www.koovs.com/cdn/shop/files/templateforprsdssoducts-09.jpg?v=1682677473&width=360'},{brand:"KOOVS",name:"Civic T-Shirt",price:"990",src:'https://www.koovs.com/cdn/shop/files/templateforproducfvdfvdfvts-08.jpg?v=1682676930&width=360'},{brand:"KOOVS",name:"Castro Loose Fit Cargo",price:"1690",src:'https://www.koovs.com/cdn/shop/files/templateforprdcdssoducts-10.jpg?v=1682675664&width=360'},{brand:"KOOVS",name:"Castro Gilet",price:"1390",src:'https://www.koovs.com/cdn/shop/files/templateforproductssss-05.jpg?v=1682675494&width=360'}]]


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
    <Heading fontFamily={'SF-Heading-font'} fontSize={'42px'} fontWeight={'500'}>New Arrivals</Heading>
    <Flex gap={5} justify={'center'} alignItems={'center'} p={'0px 55px'} cursor='pointer'>
    {/* <IconButton bg='white'> */}
     <Text bg={'white'} border={'none'} fontSize={'14px'} color={(index==1)?"red":"grey"} _hover={{color:'black',textDecoration:'underline'}} onClick={()=>handlePrevious(0)}>Retrograde</Text>
    {/* </IconButton> */}
    <Text>|</Text>
    {/* <IconButton bg='white'> */}
    <Text color={(index==0)?"red":"grey"} bg={'white'} fontSize={'14px'} _hover={{color:'black',textDecoration:'underline'}} onClick={()=>handleNext(1)}>General store</Text>
    {/* </IconButton> */}
    </Flex>

    <Flex mr={'20px'} alignItems={'center'} ml={'20px'} justify={'space-between'}>

   <SimpleGrid columns={[2,2,4,4]} p={'20px'} border={'0px solid red'} alignContent={'center'} gap={5}>
       {newArr[index]?.map((el)=>(
        <Box _hover={{width:'101%',boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'}} borderRadius={'16px'} width={'100%'} boxShadow={'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}>
        <Image borderTopRadius={'16px'} src={el.src} alt={el.name}/>
        <Heading pl={'15px'} textAlign={'left'}  fontSize={'11px'} color={'grey'}>{el.brand}</Heading>
        <Flex justify={'space-between'} padding={'15px'} alignItems={'center'}>
        <Heading textAlign={'left'}  fontSize={'16px'} color={'black'}>{el.name}</Heading>
        <IconButton bg={'black'}>
       <Button color="red" _hover={{color:'white',backgroundColor:'teal'}} ><BiRightArrowAlt fontSize={'20px'}/></Button>
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

export default NewArrivals;