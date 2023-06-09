import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from 'react-icons/io'
import { FaEye } from 'react-icons/fa'
import { RiSubtractFill } from 'react-icons/ri'
import { IoMdAdd } from 'react-icons/io'
import { BsShare } from 'react-icons/bs'
import { BsQuestionCircle, BsStar } from 'react-icons/bs'
import { Box, Button, Image, Text, useToast } from "@chakra-ui/react";
import { addToCart } from "../Redux/Auth/actions";
import { useDispatch } from "react-redux";

export default function SingleProduct() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const n = Math.ceil(Math.random() * 6);
  const dispatch = useDispatch();
  const toast = useToast();

  const cartSuccessToast=(data)=>{
    return(
      toast({
        title: 'Added to cart',
        description: data.msg,
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      })
    )
  }

  const cartFailureToast=(error)=>{
    return(
      toast({
        title: "Unable to add to cart",
        description: error.msg,
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      })
    )
  }

  const getData = () => {
    fetch(`${process.env.REACT_APP_API_AI}/products/${id}`)
      .then((res) => res.json()).then((data) => {
        setData(data.msg[0]);
      });
  };

  useEffect(() => { getData() }, [id]);

  const handleCart = async() => {
    try {
     const res = await dispatch(addToCart({ ...data,prodId:id,quantity,status:'pending'}));
     cartSuccessToast(res.data);    
    } catch (error) {
      cartFailureToast(error.response.data)
    }
  }

  return (
    <>
      <Box display={'flex'} w='100%' m='auto' justifyContent={'center'}>
        <Text fontSize={['10px', '10px', '14px', '16px', '16px']}><Link to='/'>Home</Link></Text>
        <Text fontSize={['10px', '10px', '14px', '16px', '16px']} mt='3px'><IoIosArrowForward /></Text>
        <Text fontSize={['10px', '10px', '14px', '16px', '16px']}><Link to='/products'>all men products</Link></Text>
        <Text fontSize={['10px', '10px', '14px', '16px', '16px']} mt='3px'><IoIosArrowForward /></Text>
        <Text fontSize={['10px', '10px', '14px', '16px', '16px']} textTransform={'lowercase'}>{data.name}</Text>
      </Box>

      <Box display={['block', 'block', 'flex', 'flex']} w={['100%', '100%', '80%', "80%"]} m='auto' gap='20px' mt='20px'>
        <Box><Image m='auto' w={['300px', '300px', '350px', '400px', '500px']} src={data.image} alt="" /></Box>

        <Box textAlign={'left'} p='10px' >
          <Box display={'flex'} textAlign='left' justifyContent={'space-between'}>
            <Text fontSize={['14px', '14px', '18px', '24px', '24px']}>{data.name}</Text>
            <Button display={['none', 'none', 'block', 'block', 'block']} float={'right'} fontSize={'24px'} variant={'unstyled'} padding={'6px'} m='5px'
              border={'1px solid black'} borderRadius={'50%'}><BsStar />
            </Button>
          </Box>

          <Text fontSize={['16px', '16px', '18px', '22px', '22px']} fontWeight={'500'}>Rs. {data.price}</Text>
          <Text style={{ color: "grey", fontSize: "14px", lineHeight: "21px" }}>Tax included.</Text>
          <Box style={{ margin: "20px 0px 20px 0px" }}>
            <Text style={{ color: "", fontSize: "14px", lineHeight: "21px", display: "inline-flex" }}><FaEye style={{ margin: "2px 5px 0px 5px", fontSize: "18px" }} /> {n} people are viewing this right now</Text>
          </Box>

          <Text><Text style={{ fontWeight: "600" }}>Size</Text>:M</Text>
          {/* <img style={{cursor:"pointer", margin:"10px 0px 20px 0px"}} src={size} alt="" /> */}
          <Box>
            <Text style={{ fontWeight: '600', fontSize: "14px", margin: "30px 0px 15px 0px" }}>Quantity</Text>
            <Box display={['block', 'block', 'flex', 'flex']} gap='10px'>
              <Box style={{ display: "flex", border: "1px solid grey" }} w='110px' mb='10px'>
                <Button variant={'unstyled'} padding={"10px"} isDisabled={quantity == 1 ? true : false} onClick={() => setQuantity(prev => prev - 1)}><RiSubtractFill /></Button>
                <Text style={{ padding: "10px" }}>{quantity}</Text>
                <Button padding={"10px"} variant={'unstyled'} onClick={() => setQuantity(prev => prev + 1)}><IoMdAdd /></Button>
              </Box>

              <Link to="/cart"> <Button width={['350px', '350px', '440px', '440px']} variant={'unstyled'} border={'1px solid black'} height={'44px'}
                _hover={{ backgroundColor: "black", color: "white" }} onClick={handleCart}>Add to cart</Button>
              </Link>
            </Box>
            <Link to='/buynow'>
              <Button width={['350px', '400px', '562px', '562px']} variant={'unstyled'} border={'1px solid black'} height={'44px'} backgroundColor={'black'} color={'white'}
                _hover={{ backgroundColor: "white", color: "black" }} margin='20px 0px 10px 0px'>BUY IT NOW</Button>
            </Link>
          </Box>
          <Box style={{ display: "flex", marginTop: "50px", fontSize: "14px" }}>
            <BsQuestionCircle fontSize={'20px'} />
            <Text style={{ display: "flex", padding: '0px 10px 0px 10px' }}>Ask a question</Text>
            <BsShare fontSize={'15px'} />
            <Text style={{ display: "flex", padding: '0px 10px 3px 10px' }}>Share</Text>
          </Box>
          <Box width={['350px', '400px', '562px', '562px']} borderTop='1px solid grey' mt='5px'></Box>
        </Box>
      </Box>
      <Box>

        <Box style={{ borderBottom: ".5px solid grey", display: "flex", justifyContent: "center", gap: "30px", width: "80%", margin: "auto", marginTop: "80px" }}>
          <Text style={{ fontWeight: "700", borderBottom: "3px solid black" }}>Product description</Text>
          <Text style={{ fontWeight: "700", color: "grey" }}>Shipping & Return</Text>
          <Text style={{ fontWeight: "700", color: "grey" }}>Material & care</Text>
        </Box>
        <Box style={{
          textAlign: "left", width: "80%", margin: "auto", marginTop: "50px", color: 'grey', marginBottom: "80px", lineHeight: "30px",
          fontSize: "14px"
        }}>
          <li>Relax Fit Tee</li>
          <li>Crew Neck</li>
          <li>Rib Finish at Neckline</li>
          <li>Brand Logo Print at the Centre Front</li>
          <li>Premium Quality Fabric</li>
          <li>Model wears size L and is 6'2</li>
        </Box>
      </Box>
    </>
  );
}

