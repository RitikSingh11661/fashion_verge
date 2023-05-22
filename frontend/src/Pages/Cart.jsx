import { Box, Text, extendTheme, Button, Image, Heading, useToast } from "@chakra-ui/react";
import CartCard from "./CartCard";
import { BsPencil } from "react-icons/bs"
import { FaShippingFast } from "react-icons/fa"
import { RiCouponLine } from "react-icons/ri"
import { FiChevronRight } from "react-icons/fi"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { deleteCartData, getCartData, updateCartData } from "../Redux/Auth/actions";

function Cart() {
    const navigate = useNavigate();
    const cart = useSelector(store => store.AuthReducer.cart);
    const dispatch = useDispatch();
    const toast = useToast();
    const breackpoints = { base: "420px", sm: "550px", md: "700px", lg: "850px", xl: "950px", "2xl": "1200px" }
    const theme = extendTheme({ breackpoints })
    // console.log('cart',cart)

    const cartDeleteSuccessToast = (data) => {
        return (
            toast({
                title: 'Removed from cart',
                description: data.msg,
                status: "success",
                duration: 3000,
                position: "top",
                isClosable: true,
            })
        )
    }

    const cartDeleteFailureToast = (error) => {
        return (
            toast({
                title: "Unable to remove from cart",
                description: error.msg,
                status: "error",
                duration: 3000,
                position: "top",
                isClosable: true,
            })
        )
    }
    // console.log('cart', cart)

    useEffect(() => {
        dispatch(getCartData)
    }, [])

    let t = cart.reduce((acc, el) => {
        return acc + (el.quantity * el.price)
    }, 0)

    const validateCart = () => {
        if (cart.length < 1) {
            toast({
                title: 'Cart empty',
                description: "Please add some items in cart to proceed",
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        } else navigate("/payment", { replace: true });
    }

    const handleQuantity = (id, method) => {
        const updatedCart = cart.filter((el) => {
            if (id == el._id) {
                method == 'inc' ? el.quantity++ : el.quantity--;
                return el
            } else return el
        })
        const updatedCartProduct = updatedCart.find(el => el._id == id);
        dispatch(updateCartData(updatedCartProduct, updatedCart));
    }

    const deleteCart = async (id) => {
        try {
            const res = await dispatch(deleteCartData(id));
            cartDeleteSuccessToast(res.data);
        } catch (error) {
            cartDeleteFailureToast(error.data)
        }
    }

    return (
        <>
            <Box><Heading fontSize={["22px", "25px", "28px", "30px", "35px", "35px"]}>Shopping Cart</Heading></Box>
            <Box display={['block', 'block', 'block', 'flex', 'flex']} w='95%' justifyContent={'space-between'} m='auto' mb='50px'>
                <Box mt="30px" w={['100%', "100%", "80%", "70%", "70%"]}>
                    {cart.length > 0 ? cart.map((e, i) => {
                        return <CartCard key={e._id} data={e} i={i} handleQuantity={handleQuantity} deleteCart={deleteCart} />
                    }) : <Box textAlign={'left'} p='20px'><Heading>No Data in cart</Heading></Box>
                    }
                </Box>
                <Box mt="50px" w={["90%", "40%", "35%", "25%", "25%", "25%"]} bgColor={'#faf5f5'} borderRadius={'10px'} h='250px' p='10px'
                    boxShadow='rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'>
                    <Box display="flex" borderBottom="1px solid gray" justifyContent="space-between">
                        <Box><BsPencil size="30px" /><Text>Note</Text></Box>
                        <Box ><FaShippingFast size="30px" /><Text>Shipping</Text></Box>
                        <Box><RiCouponLine size="30px" /><Text>Coupon</Text></Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between"><Box>Shipping</Box><Box>FREE</Box></Box>
                    <Box display="flex" justifyContent="space-between"><Box>Subtotal</Box><Box fontWeight="bold">₹ {t}</Box></Box>
                        <Box onClick={validateCart}>
                            <Button w="100%" bg="lightgrey" color="black" display="flex" justifyContent="space-between" borderRadius="0" mt="30px">
                                <Box>
                                    <Text >Place Order</Text>
                                    <Text fontSize={["5px", "6px", "8px", "10px", "11px", "11px"]}>5% Extra off on UPI</Text>
                                </Box>
                                <Box><Image src="https://cdn.gokwik.co/v4/images/upi-icons.svg" /></Box>
                                <Box><FiChevronRight /></Box>
                            </Button>
                        </Box>
                </Box>
            </Box>
        </>
    )
}
export default Cart;