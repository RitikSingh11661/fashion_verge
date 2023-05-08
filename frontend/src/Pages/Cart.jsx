import { Box, Text, extendTheme, Button, Image, Heading, useToast } from "@chakra-ui/react";
import CartCard from "./CartCard";
import { BsPencil } from "react-icons/bs"
import { FaShippingFast } from "react-icons/fa"
import { RiCouponLine } from "react-icons/ri"
import { FiChevronRight } from "react-icons/fi"
import { total } from "./CartCard";
import { useEffect, useState } from "react";
import { Link as Link, Navigate, useNavigate, } from "react-router-dom"
const breackpoints = {
    base: "420px",
    sm: "550px",
    md: "700px",
    lg: "850px",
    xl: "950px",
    "2xl": "1200px"
}
const theme = extendTheme({ breackpoints })


function Cart() {
    const navigate=useNavigate();
   

    const toast=useToast();

    const [cartData, setDartData] = useState([])
    useEffect(() => {
        const cartquantity = JSON.parse(localStorage.getItem("cart")) || []
        setDartData(cartquantity)
    }, [])
    const [Total, setTotal] = useState(0)
    let t = cartData.reduce((acc, el) => {
        return acc + (el.quantity * el.price)
    }, 0)

    const validateCart=()=>{
      if(cartData.length===0){
        toast({
            title: 'Cart empty',
            description: "Please add some items in cart to proceed",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
      }else{
        navigate("/buynow", { replace: true });
      }
    }

    const handleIncrement = (id) => {

        let d = cartData.filter((el) => {
            if (id == el.id) {
                el.quantity++;
                return el
            } else {
                return el
            }
        })

        localStorage.setItem("cart", JSON.stringify(d))

        setDartData(d)
    }

    const handleDicrement = (id) => {
        let d = cartData.filter((el) => {
            if (id == el.id) {
                el.quantity--;
                return el
            } else {
                return el
            }
        })

        localStorage.setItem("cart", JSON.stringify(d))
        setDartData(d)
    }

    const deleteCart = (i) => {
        cartData.splice(i, 1)
        localStorage.setItem("cart", JSON.stringify(cartData))
        const c = JSON.parse(localStorage.getItem("cart")) || []
        setDartData(c)
    }
    return (
        <>
            <Box>
                <Heading fontSize={["22px", "25px", "28px", "30px", "35px", "35px"]}>Shopping Cart</Heading>
            </Box>
            <Box display={['block','block','block','flex','flex']} w='95%' justifyContent={'space-between'} m='auto' mb='50px'>
            <Box mt="30px" w={['100%',"100%","80%","70%","70%"]}>
                {
                    cartData.length > 0 ? cartData.map((e, i) => (
                        <CartCard key={e.id} data={e} i={i} handleDicrement={handleDicrement} handleIncrement={handleIncrement} deleteCart={deleteCart} />
                    )) : <Box textAlign={'left'} p='20px'>
                        <Heading>No Data in cart</Heading>
                    </Box>
                }

            </Box>
            <Box mt="50px" w={["90%", "40%", "35%", "25%", "25%", "25%"]} bgColor={'#faf5f5'} borderRadius={'10px'} h='250px' p='10px'
            boxShadow='rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'>
                <Box display="flex" borderBottom="1px solid gray" justifyContent="space-between">
                    <Box>
                        <BsPencil size="30px" />
                        <Text>Note</Text>
                    </Box>
                    <Box >
                        <FaShippingFast size="30px" />
                        <Text>Shipping</Text>
                    </Box>
                    <Box>
                        <RiCouponLine size="30px" />
                        <Text>Coupon</Text>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Box>Shipping</Box>
                    <Box>:FREE</Box>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Box>Subtotal</Box>

                    <Box fontWeight="bold">{t}</Box>

                </Box>

                <Box onClick={validateCart}>
                    <Button w="100%" bg="lightgrey" color="black" display="flex" justifyContent="space-between" borderRadius="0" mt="30px">
                        <Box>
                            <Text >Place Order</Text>

                            <Text fontSize={["5px", "6px", "8px", "10px", "11px", "11px"]}>5% Extra off on UPI</Text>
                        </Box>
                        <Box>
                            <Image src="https://cdn.gokwik.co/v4/images/upi-icons.svg" />
                        </Box>
                        <Box><FiChevronRight /></Box>
                    </Button>
                </Box>
            </Box>
            </Box>
        </>
    )
}
export default Cart;