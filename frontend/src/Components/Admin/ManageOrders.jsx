import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders,handleOrder } from '../../Redux/Admin/actions';
import {Table,Thead,Tbody,Tr,Th,Td,TableContainer,Heading,IconButton,useToast,Image,CircularProgress} from '@chakra-ui/react'
import { FiClock,FiTruck,FiXOctagon } from 'react-icons/fi';
// import {theme} from '@chakra-ui/react';

const ManageOrders = () => {
  const {isLoadingOrders,isErrorOrders,orders}=useSelector(state=>state.AdminReducer);
  const dispatch=useDispatch();

  // console.log('Manage Orders is rendering');
  useEffect(()=>{dispatch(getOrders)},[]);

  // const getButtonColor = (status) => {
  //   switch (status) {
  //     case "Delayed": return theme.colors.blue[900]
  //     case "Passed": return theme.colors.green[900]
  //     case "Rejected": return theme.colors.red[900]
  //     default: return ""
  //   }
  // }
  
  return (
    <div>
      <Heading size='md'>Manage Orders</Heading>
      {isLoadingOrders && <CircularProgress isIndeterminate color='green.300' />}
      {isErrorOrders && <h2>Error Occured while getting Orders</h2>}
      {!isLoadingOrders && orders?.length<1 && <h2>Users did not order anything from our Store</h2>}
        <div>
          {orders?.length > 0 && 
          <TableContainer width={'auto'}>
          <Table variant='striped' colorScheme='teal' size={'sm'}>
            <Thead>
              <Tr>
                <Th>Photo</Th>
                <Th>Name</Th>
                <Th>Category</Th>
                <Th>User Name</Th>
                <Th>User Email</Th>
                <Th>Delay</Th>
                <Th>Pass</Th>
                <Th>Reject</Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders.map((order)=>{
                // const buttonColor = getButtonColor(order.status);
                // console.log('buttonColor',buttonColor)
                let colorProp='',one='',two='',three='';
                // order.status==='Delayed'?one=theme.colors.blue[900]:order.status==='Passed'?two='green':order.status==='Rejected'?three=theme.colors.red[900]:colorProp="";
                order.status==='Delayed'?one='blue':order.status==='Passed'?two='green':order.status==='Rejected'?three='red':colorProp="";
                return(
                <Tr key={order._id}>
                <Td><Image src={order.image} alt={order.name} boxSize='90px' borderRadius='full' /></Td>
                <Td>{order.name}</Td>
                <Td>{order.category}</Td>
                <Td>{order.userName}</Td>
                <Td>{order.userEmail}</Td>
                <Td><IconButton aria-label='Delay order' onClick={()=>dispatch(handleOrder(order._id,'Delayed'))} color={one} icon={<FiClock/>}/></Td>
                <Td><IconButton aria-label='Pass order' onClick={()=>dispatch(handleOrder(order._id,'Passed'))} color={two} icon={<FiTruck/>}/></Td>
                <Td><IconButton aria-label='Reject order' onClick={()=>dispatch(handleOrder(order._id,'Rejected'))} color={three} icon={<FiXOctagon/>}/></Td>
              </Tr>
                )})
              }
            </Tbody>
          </Table>
        </TableContainer>
          }
        </div>
    </div>
  )
}

export default ManageOrders