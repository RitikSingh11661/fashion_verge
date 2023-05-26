import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsersList } from '../../Redux/Admin/actions';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Heading, IconButton, useToast, CircularProgress } from '@chakra-ui/react'
import { FiUserX } from 'react-icons/fi';

const ManageUsers = () => {
  const { isLoadingUserList, isErrorUserList, users, orders, carts } = useSelector(store => store.AdminReducer);
  let totalOrders=0,total = 0, totalProfit = 0, totalCart = 0;
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete = (user) => {
    try {
      dispatch(deleteUser(user._id));
      toast({
        title: 'User Deleted',
        description: `${user.name} has been deleted successfully`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while deleting',
        description: `${user.name} has not deleted`,
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }
  }

  // why my this componet is rednering 2 extra times?
  // console.log('Mannge users is rendering');

  let totalArray = [], usersIds = [];
  orders?.forEach((order) => {
    if (!totalArray.some((obj) => obj.userId === order.userId) && !usersIds.includes(order.userId)) {
      const newUser = { _id: order.userId, username: order.userName, orderQuantity: order.quantity, totalOrderPrice: order.price, totalCart: 0 };
      totalArray.push(newUser);
      usersIds.push(order.userId);
    } else {
      totalArray.some((obj) => {
        obj.orderQuantity = obj.orderQuantity + 1;
        obj.totalOrderPrice += obj.totalOrderPrice;
      });
    }
    total += order.price;
  });

  carts?.forEach((cart) => {
    if (!totalArray.some((obj) => obj.userId === cart.userId) && !usersIds.includes(cart.userId)) {
      const newUser = { _id: cart.userId, username:cart.userName,orderQuantity: 0, totalOrderPrice: 0, totalCart: 1 };
      totalArray.push(newUser);
      usersIds.push(cart.userId);
    } else {
      totalArray.some((obj) => {
        if (obj._id === cart.userId) obj.totalCart += 1;
      });
    }
  });

  users.forEach((user) => {
    if (!totalArray.some(obj => obj._id === user._id)) {
      const newUser = { _id: user._id, username: user.name, orderQuantity: 0, totalOrderPrice: 0, totalCart: 0 };
      totalArray.push(newUser);
    }
  })

  useEffect(() => {
    dispatch(getUsersList);
  }, []);

  return (
    <div>
      <Heading size='md'>Manage Users</Heading>
      {isLoadingUserList && <CircularProgress isIndeterminate color='green.300' />}
      {isErrorUserList && <h2>Error Occured while getting User list</h2>}
      <div> {users.length > 0 &&
        <TableContainer>
          <Table variant='striped' colorScheme='teal' size={'lg'}>
            <Thead>
              <Tr>
                <Th>User</Th>
                <Th>Order</Th>
                <Th>Cart</Th>
                <Th>Total</Th>
                <Th>Profit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {totalArray.map((user) => {
                totalProfit += 100;
                totalCart += user.totalCart;
                totalOrders+=user.orderQuantity;
                return <Tr key={user._id}>
                  <Td>{user.username}</Td>
                  <Td>{user.orderQuantity}</Td>
                  <Td>{user.totalCart}</Td>
                  <Td>₹{user.totalOrderPrice}</Td>
                  <Td>₹{totalProfit}</Td>
                  <Td><IconButton aria-label='Delete database' onClick={() => handleDelete(user)} icon={<FiUserX />} /></Td>
                </Tr>
              })}
            </Tbody>
            <Tfoot bg={'yellow.400'}>
              <Tr>
                <Th>Total : {users.length}</Th>
                <Th >Orders : {totalOrders}</Th>
                <Th>Cart : {totalCart}</Th>
                <Th>Total : ₹{total}</Th>
                <Th>Profit : ₹{totalProfit}</Th>
                <Th></Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      }
      </div>
    </div>
  )
}
export default ManageUsers;
