import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex, FormControl, FormLabel, Input, Button, Checkbox, Link, Text, Select, useToast } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addAddress, deleteAddress, getAddressess, getCartData, orderPlaced } from '../Redux/Auth/actions';

const Payment = () => {
  const initForm = { country: "", firstName: "", lastName: "", address: "", city: "", company: "", pincode: "", phone: "", declaration: false };
  const formRef = useRef(initForm);
  const dispatch = useDispatch();
  const { cart, addresses } = useSelector(store => store.AuthReducer)
  const toast = useToast();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const navigate = useNavigate();

  const addAddressSuccessToast = (data) => {
    return (
      toast({
        title: 'Address added successfully',
        description: data.msg,
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      })
    )
  }

  const addAddressFailureToast = (error) => {
    return (
      toast({
        title: "Unable to add address",
        description: error?.msg,
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      })
    )
  }

  const deleteAddressSuccessToast = (data) => {
    console.log('data', data)
    return (
      toast({
        title: 'Address deleted successfully',
        description: data.msg,
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      })
    )
  }

  const deleteAddressFailureToast = (error) => {
    return (
      toast({
        title: "Unable to delete address",
        description: error?.msg,
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      })
    )
  }

  const orderPlacedSuccessToast = (data) => {
    return (
      toast({
        title: 'Order placed successfully',
        description: data.msg,
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      })
    )
  }

  const orderPlacedFailureToast = (error) => {
    return (
      toast({
        title: "Unable to place order",
        description: error?.msg,
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      })
    )
  }

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    formRef.current = { ...formRef.current, [id]: fieldValue };;
    setIsFormFilled(handleIsFormFilled)
  };

  const handleIsFormFilled = () => {
    for (const field in formRef.current) if (field !== "company" && formRef.current[field] === "") return false;
    return true;
  };
  console.log('Date',new Date())

  const handlePayment = async (e, detail, flag) => {
    e.preventDefault();
    try {
      if (flag==='indirect') {
        dispatch(addAddress(detail)).then(async (res) => {
          addAddressSuccessToast(res.data);
          dispatch(orderPlaced(cart, res.data.data._id)).then(resOrder => {
            orderPlacedSuccessToast(resOrder.data);
            navigate('/orders');
          }).catch(error => orderPlacedFailureToast(error.data));
        }).catch(error => addAddressFailureToast(error.data));
      } else {
        const resOrder = await dispatch(orderPlaced(cart, detail._id));
        orderPlacedSuccessToast(resOrder?.data);
        navigate('/orders');
      }
    } catch (error) {
      console.log('error', error);
      orderPlacedFailureToast(error.data);
    }
  };

  const handleDeleteAddress = async (id) => {
    try {
      const res = await dispatch(deleteAddress(id));
      console.log('res', res)
      deleteAddressSuccessToast(res.data)
    } catch (error) {
      console.log('error', error)
      deleteAddressFailureToast(error.data)
    }
  }

  useEffect(() => {
    dispatch(getAddressess);
    dispatch(getCartData);
  }, [])

  return (
    <Flex justifyContent="center">
      <Box width="500px" padding="4">
        <Flex justifyContent="center">
          <img src="https://cdn.shopify.com/s/files/1/0590/4095/6580/files/Untitled_design_x320.png?v=1643627388" alt="icon" />
        </Flex>
        <Box marginTop="8">
          <Text as="h2" fontSize="xl" fontWeight="bold" marginBottom="4">Saved Addresses</Text>
          {addresses.length > 0 ? addresses.map((address, index) => {
            if (address.declaration) {
              return <Box key={index} backgroundColor="gray.100" padding="4" marginBottom="4" borderRadius="md" cursor="pointer" _hover={{ backgroundColor: 'gray.200' }} onClick={() => setSelectedAddress(address._id != selectedAddress?._id ? address : null)} boxShadow={selectedAddress?._id === address._id ? '0 0 0 2px #3182ce' : ''} transition="box-shadow 0.3s ease">
                <Text fontSize="lg" fontWeight="bold" marginBottom="2">Address {index + 1}</Text>
                <Text><strong>Country:</strong> {address?.country}</Text>
                <Text><strong>First Name:</strong> {address?.firstName}</Text>
                <Text><strong>Last Name:</strong> {address?.lastName}</Text>
                <Text><strong>Address:</strong> {address?.address}</Text>
                <Text><strong>City:</strong> {address?.city}</Text>
                {address?.company && <Text><strong>Company:</strong> {address?.company}</Text>}
                <Text><strong>PIN code:</strong> {address?.pincode}</Text>
                <Text><strong>Phone:</strong> {address?.phone}</Text>
                <Flex justifyContent="flex-end" marginTop="4">
                  <Button colorScheme="blue" variant="outline" marginRight="2">Update</Button>
                  <Button colorScheme="red" variant="outline" onClick={() => handleDeleteAddress(address._id)}>Delete</Button>
                </Flex>
              </Box>
            }
          }) : <Text>No addresses saved yet.</Text>}
        </Box>
        <form onSubmit={(e) => handlePayment(e, formRef.current, 'indirect')}>
          <FormControl id="country" isRequired>
            <FormLabel>Country/Region</FormLabel>
            <Select placeholder="Country/Region" onChange={handleChange}>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="China">China</option>
              <option value="France">France</option>
              <option value="Hong Kong SAR">Hong Kong SAR</option>
              <option value="India">India</option>
              <option value="Israel">Israel</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Nepal">Nepal</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Singapore">Singapore</option>
              <option value="South Africa">South Africa</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
            </Select>
          </FormControl>
          <FormControl id="firstName" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input type="text" onChange={handleChange} />
          </FormControl>
          <FormControl id="lastName" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" onChange={handleChange} />
          </FormControl>
          <FormControl id="address" isRequired>
            <FormLabel>Address</FormLabel>
            <Input type="text" onChange={handleChange} />
          </FormControl>
          <Flex justifyContent="space-between">
            <FormControl id="city" isRequired>
              <FormLabel>City</FormLabel>
              <Input type="text" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Company</FormLabel>
              <Input type="text" onChange={handleChange} />
            </FormControl>
            <FormControl id="pincode" isRequired>
              <FormLabel>PIN code</FormLabel>
              <Input type="number" onChange={handleChange} />
            </FormControl>
          </Flex>
          <FormControl id="phone" isRequired>
            <FormLabel>Phone</FormLabel>
            <Input type="number" onChange={handleChange} />
          </FormControl>
          <Checkbox id="declaration" colorScheme="blue" onChange={handleChange}>
            Save this information for next time
          </Checkbox>
          <Flex justifyContent="space-between" marginTop="4">
            <Link as={RouterLink} to="/cart">
              <Button variant="outline">❮ Return to cart</Button>
            </Link>
            <Button type={selectedAddress ? 'button' : 'submit'} isDisabled={!selectedAddress && !isFormFilled} onClick={(e) => selectedAddress ? handlePayment(e, selectedAddress, 'direct') : ''} colorScheme="blue">Continue to Payment</Button>
          </Flex>
        </form>
        <Box marginTop="8">
          <hr />
          <Flex justifyContent="space-between">
            <Text as="ul" listStyleType="none" display="flex" gap="4" color="#1773b0">
              <li>Refund policy</li>
              <li>Shipping policy</li>
              <li>Privacy policy</li>
              <li>Terms of service</li>
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );

}
export default Payment;