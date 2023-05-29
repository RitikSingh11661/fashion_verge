import { useDispatch } from "react-redux";
import { useToast, Box, Select, FormControl, Input, Heading, FormLabel, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { addAdmin } from "../../Redux/Admin/actions";

const AddAdmins = () => {
  const dispatch = useDispatch();
  const initForm = { name: '', email: '', password: '', role: '', image: '', contact: '' }
  const toast = useToast();
  const [form, setForm] = useState(initForm);

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(addAdmin(form))
      toast({
        title: 'Admin Added',
        description: `${form.name} has been added successfully`,
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while adding',
        description: `${form.name} has not added`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
    setForm(initForm)
  }

  // console.log('Add Admins is rendering');

  return (
    <VStack align="stretch" spacing={4}>
      <Heading size="md" textAlign="center">
        Add Admin
      </Heading>
      <Box as="form" onSubmit={formSubmitHandler}>
        <FormControl isRequired>
          <FormLabel>Admin Name</FormLabel>
          <Input type="text" name="name" background="#fff" htmlSize={45} onChange={formChangeHandler} value={form.name} />
          <FormLabel>Admin Image Link</FormLabel>
          <Input type="url" name="image" background="#fff" onChange={formChangeHandler} value={form.image} />
          <FormLabel>Admin Email</FormLabel>
          <Input type="email" name="email" background="#fff" onChange={formChangeHandler} value={form.email} />
          <FormLabel>Admin Contact No.</FormLabel>
          <Input type="number" name="contact" background="#fff" onChange={formChangeHandler} value={form.contact} />
          <FormLabel>Admin Password</FormLabel>
          <Input type="password" name="password" background="#fff" onChange={formChangeHandler} value={form.password} />
          <FormLabel>Admin Category</FormLabel>
          <Select placeholder="Select Role" name="role" background="cornflowerblue" onChange={formChangeHandler}>
            <option value="Technical">Technical</option>
            <option value="Developer">Developer</option>
            <option value="Project Manager">Project Manager</option>
            <option value="Sales">Sales</option>
            <option value="Customer Executive">Customer Executive</option>
          </Select>
          <Button type="submit" colorScheme="teal" marginTop="2" width="100%">Add</Button>
        </FormControl>
      </Box>
    </VStack>
  )
}

export default AddAdmins;