import { Box, Button, Flex, HStack, Heading, IconButton, Image, SimpleGrid, Text, scroll, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";


const SneakerEdit = () => {
    const [index, setIndex] = useState(0);
    
    const woumen=[[{brand:"ARKK COPENHAGEN",name:"Oserra Mesh S-SP - Marshamallow Velled Rose",price:"10990",src:'https://www.koovs.com/cdn/shop/products/example-600x800-for-product-catalogue-09_e299833a-868a-4a1e-a0b0-3d64871c76e2.jpg?v=1668171869&width=360'},{brand:"NIKE",name:"Nike Air Max Impact 2",price:"8195",src:'https://www.koovs.com/cdn/shop/products/comatoestemplpate-01_38280a15-65ae-40d8-aa2f-f3c6a4d74707.jpg?v=1677146706&width=360'},{brand:"ARKK COPENHAGEN",name:"Oserra Mesh S-SP - White Wind Grey",price:"10990",src:'https://www.koovs.com/cdn/shop/products/example-600x800-for-product-catalogue-09_d12180a2-5086-4fd8-a290-839cac61b933.jpg?v=1668171862&width=360'},{brand:"NIKE",name:"Lebron XVIII",price:"17595",src:'https://www.koovs.com/cdn/shop/products/comatoestemplpate_aa96a303-c7df-4922-9937-7409e828ef82.jpg?v=1677070299&width=360'}],[{brand:"ARKK COPENHAGEN",name:"Visuklass Leather S-C18",price:"9990",src:'https://www.koovs.com/cdn/shop/products/example-600x800-for-product-catalogue-07_7bd9986f-ed5f-4803-8f8b-5194af5df213.jpg?v=1668171912&width=360'},{brand:"ARKK COPENHAGEN",name:"Nike Air Max Scorpion",price:"14990",src:'https://cdn.shopify.com/s/files/1/0677/1464/6315/products/example-600x800-for-product-catalogue-06_6d763efe-319f-42f0-9b24-b9f7a59209f9.jpg?v=1668171891&width=360'},{brand:"NIKE",name:"Lebron XVIII",price:"17595",src:'https://www.koovs.com/cdn/shop/products/comatoestemplpate_aa96a303-c7df-4922-9937-7409e828ef82.jpg?v=1677070299&width=360'},{brand:"NIKE",name:"Nike Air Max Impact 2",price:"8195",src:'https://www.koovs.com/cdn/shop/products/comatoestemplpate-01_38280a15-65ae-40d8-aa2f-f3c6a4d74707.jpg?v=1677146706&width=360'}]]


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
<div className="carousel" style={{color:'black'}} >
    <br />
    <>
    <Heading fontFamily={'SF-Heading-font'} pt='45px' fontWeight={'400'} textDecoration={'underline'}>Sneaker Edit</Heading>
    <Flex mr={'20px'} alignItems={'center'} ml={'20px'} justify={'space-between'}>
    <IconButton >
    <Text color="black" borderRadius={'50%'} backgroundColor='teal' _hover={{color:'white',backgroundColor:'black'}} onClick={handlePrevious}><BiLeftArrowAlt fontSize={'30px'}/></Text>
    </IconButton>
   <SimpleGrid columns={[2,2,4,4]} p={'30px'} border={'0px solid red'} alignContent={'center'} gap={5}>
       {woumen[index]?.map((el)=>(
        <Box _hover={{width:'101%',boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'}} borderRadius={'16px'} width={'100%'} >
        <Image height={'350px'} width={'450px'} borderTopRadius={'16px'} src={el.src} alt={el.name}/>
        <Heading pl={'15px'} textAlign={'left'}  fontSize={'11px'} color={'grey'}>{el.brand}</Heading>
          <Flex justify={'space-between'} padding={'15px'} alignItems={'center'}>
          <Heading noOfLines={1} textAlign={'left'}  fontSize={'16px'} color={'black'}>{el.name}</Heading>
          </Flex>
          <Heading pl={'15px'} pb={'10px'} textAlign={'left'}  fontSize={'14px'} color={'grey'}>Rs. {el.price}.00</Heading>
        </Box>
       ))}
    </SimpleGrid>
    <IconButton >
    <Text color="black" borderRadius={'50%'} backgroundColor='teal' _hover={{color:'white',backgroundColor:'black'}} onClick={handleNext}><BiRightArrowAlt fontSize={'30px'}/></Text>
    </IconButton>
    </Flex>
    </>
</div>
);
};

export default SneakerEdit;


// import { Box, Button, Flex, Heading, IconButton, Image, SimpleGrid, Text, scroll, useBreakpointValue } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

// const SneakerEdit = () => {
//     const [index, setIndex] = useState(0);

//     const sneakArr=[[{brand:"ARKK COPENHAGEN",name:"Oserra Mesh S-SP - Marshamallow Velled Rose",price:"10990",src:'https://www.koovs.com/cdn/shop/products/example-600x800-for-product-catalogue-09_e299833a-868a-4a1e-a0b0-3d64871c76e2.jpg?v=1668171869&width=360'},{brand:"NIKE",name:"Nike Air Max Impact 2",price:"8195",src:'https://www.koovs.com/cdn/shop/products/comatoestemplpate-01_38280a15-65ae-40d8-aa2f-f3c6a4d74707.jpg?v=1677146706&width=360'},{brand:"ARKK COPENHAGEN",name:"Oserra Mesh S-SP - White Wind Grey",price:"10990",src:'https://www.koovs.com/cdn/shop/products/example-600x800-for-product-catalogue-09_d12180a2-5086-4fd8-a290-839cac61b933.jpg?v=1668171862&width=360'},{brand:"NIKE",name:"Lebron XVIII",price:"17595",src:'https://www.koovs.com/cdn/shop/products/comatoestemplpate_aa96a303-c7df-4922-9937-7409e828ef82.jpg?v=1677070299&width=360'}],[{brand:"ARKK COPENHAGEN",name:"Visuklass Leather S-C18",price:"9990",src:'https://www.koovs.com/cdn/shop/products/example-600x800-for-product-catalogue-07_7bd9986f-ed5f-4803-8f8b-5194af5df213.jpg?v=1668171912&width=360'},{brand:"NIKE",name:"Nike Air Max Scorpion",price:"22995",src:'https://www.koovs.com/cdn/shop/products/nike-air-max-scorpion-womens-triple-black-dj4702-002-6RESIZE-06.jpg?v=1677072294&width=360'},{brand:"NIKE",name:"Lebron XVIII",price:"17595",src:'https://www.koovs.com/cdn/shop/products/comatoestemplpate_aa96a303-c7df-4922-9937-7409e828ef82.jpg?v=1677070299&width=360'},{brand:"NIKE",name:"Nike Air Max Impact 2",price:"8195",src:'https://www.koovs.com/cdn/shop/products/comatoestemplpate-01_38280a15-65ae-40d8-aa2f-f3c6a4d74707.jpg?v=1677146706&width=360'}]] 

//     const length = 2;

//     const handlePrevious = () => {
//     const newIndex = index - 1;
//     setIndex(newIndex < 0 ? length - 1 : newIndex);
//     };
    
//     const handleNext = () => {
//     const newIndex = index + 1;
//     setIndex(newIndex >= length ? 0 : newIndex);
//     };

//  return (
// <div className="carousel" style={{color:'black'}}>
//     <br />
//     <>
//     <Heading fontFamily={'SF-Heading-font'} textDecoration={'underline'} fontSize={'42px'} fontWeight={'500'}>Sneaker Edit</Heading>
//     <IconButton bg={'black'} >
//      <Button color="red" _hover={{color:'black',backgroundColor:'red'}} onClick={handlePrevious}><BiLeftArrowAlt fontSize={'30px'}/></Button>
//     </IconButton>
//     <Flex mr={'20px'} alignItems={'center'} ml={'20px'} justify={'space-between'}>
//    <SimpleGrid columns={[2,2,4,4]} p={'10px'} border={'1px solid red'} alignContent={'center'} gap={10}>
//        {sneakArr[index]?.map((el)=>(
//         <Box border={'1px solid red'} _hover={{width:'101%',boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'}} borderRadius={'16px'} width={'100%'} >
//         <Image height={'300px'} width={'100%'} border={'0px solid red'} borderTopRadius={'16px'} src={el.src} alt={el.name}/>
//         <Heading pl={'15px'} textAlign={'left'}  fontSize={'11px'} color={'grey'}>{el.brand}</Heading>
//         <Flex justify={'space-between'} padding={'15px'} alignItems={'center'}>
//         <Heading noOfLines={1} textAlign={'left'}  fontSize={'16px'} color={'black'}>{el.name}</Heading>
//         </Flex>
//         <Heading pl={'15px'} pb={'10px'} textAlign={'left'}  fontSize={'14px'} color={'grey'}>Rs. {el.price}.00</Heading>
//         </Box>
//        ))}
//     </SimpleGrid>
//     </Flex>
//     <IconButton bg={'black'}>
//     <Button color="red" _hover={{color:'black',backgroundColor:'red'}} onClick={handleNext}><BiRightArrowAlt fontSize={'30px'}/></Button>
//     </IconButton>
//     </>
// </div>
// );
// }

// export default SneakerEdit



// <Flex gap={5} justifyContent={'right'} p={'0px 55px'}>
{/* <IconButton >
<Text color="black" borderRadius={'50%'} backgroundColor='teal' _hover={{color:'white',backgroundColor:'black'}} onClick={handlePrevious}><BiLeftArrowAlt fontSize={'30px'}/></Text>
</IconButton>
<IconButton >
<Text color="black" borderRadius={'50%'} backgroundColor='teal' _hover={{color:'white',backgroundColor:'black'}} onClick={handleNext}><BiRightArrowAlt fontSize={'30px'}/></Text>
</IconButton>
</Flex> */}