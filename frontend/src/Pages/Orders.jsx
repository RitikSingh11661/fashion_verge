import React, { useEffect, useState } from 'react'
import { getOrders } from '../Redux/Auth/actions'
import { Box, Container, Heading, Text, Wrap, WrapItem, Image } from '@chakra-ui/react';

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  console.log('orders', orders);

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }

  function getOrderId(id) {
    const start = id.indexOf('"') + 1;
    const end = id.lastIndexOf('"');
    return id.substring(start, end);
  }

  useEffect(() => {
    getOrders().then(res => setOrders(res.data.data));
  }, [])
  return (
    <Container maxW="container.lg" mt={8}>
      <Heading as="h1" size="lg" mb={4}>Orders</Heading>
      <Wrap spacing={4}>
        {orders?.length > 0 && orders.map((order) => (
          <WrapItem key={order._id}>
            <Box p={4} borderWidth="1px" borderRadius="md" width={{ base: '100%', sm: '300px' }} textAlign="center" boxShadow="md">
              <Image src={order.image} alt={order.name} mb={4} />
              <Text fontWeight="bold" mb={2}>Order ID: {order._id}</Text>
              <Text>Product: {order.name}</Text>
              <Text>Quantity: {order.quantity}</Text>
              <Text>Purchase Time: {formatDate(order.createdAt)}</Text>
              <Text>Status: {order.status}</Text>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
      {orders.length < 1 && <Heading textAlign="center">You didn't order anything</Heading>}
    </Container>
  )
}