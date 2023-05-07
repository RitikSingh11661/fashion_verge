import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import {RiDeleteBin6Line} from 'react-icons/ri'

export const total=[];
function CartCard({data,handleDicrement,handleIncrement,i,deleteCart}){
    const cartData=JSON.parse(localStorage.getItem("cart"))||[]
    const [count,setCount]=useState(1)
    const handleCount=(val)=>{
        setCount(count+val)
    }
// total.push(count*data.price);
//     console.log(data.image)
    return(
        <Box display={["","flex","flex","flex","flex","flex"]} p='10px' w='100%' mt='20px' bgColor={'#faf5f5'} justifyContent={'space-between'} borderRadius={'10px'} fontFamily="sans-serif" alignContent="center" alignItems="center"
        boxShadow='rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'>
                <Box w={["100%","45%","45%","55%","55%","50%"]} bgColor={'#ececec'} borderRadius={'10px'} boxShadow='rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'>
                    <Box display="flex" gap="10px">
                        <Box w={["90%","60%","50%","25%","25%","20%"]}>
                        <Image borderRadius={'10px'} src={data.image}/>
                        </Box>
                        <Box padding={'20px'}>
                            <Text fontWeight={'600'} fontSize={'16px'} textAlign={'left'}>{data.name}</Text>
                            <Text fontWeight={'600'} fontSize={'13px'} textAlign={'left'}>{data.subhead}</Text>
                           <Box display={'flex'} justifyContent={'space-between'} w='330px'>
                           <Text mt='10px' fontWeight={'600'} fontSize={'16px'} textAlign={'left'}>Price: ₹ {data.price}</Text>
                            <Button variant={'unstyled'} pt={'5px'} fontSize={'18px'} onClick={()=>deleteCart(i)}><RiDeleteBin6Line/></Button>
                           </Box>
                            
                        </Box>
                    </Box>
                </Box>

                <Box w="100px">
                    <Text fontWeight="bold">Quantity</Text>
                    <Box bgColor={'#ececec'} boxShadow='rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset' display="flex" borderRadius={'5px'}>
                        <Button bg="none" onClick={()=>handleIncrement(data.id)}>+</Button>
                        <Text  m="auto">{data.quantity}</Text>
                        <Button bg="none" isDisabled={data.quantity==1? true:false} onClick={()=>handleDicrement(data.id)}>-</Button>
                    </Box>
                </Box>

                <Box mr='20px' fontWeight="bold">
                    <Text ></Text>
                    <Text>Total: ₹ {data.quantity*data.price}</Text>

                </Box>
        </Box>
        
    )
}
export default CartCard;