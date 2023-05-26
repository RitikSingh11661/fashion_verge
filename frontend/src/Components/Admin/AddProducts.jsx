import React, { useState } from 'react'
import { FormControl, Input, Heading, FormLabel, Button, useToast, Flex, Box, Image, Stack, Text, IconButton } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/Admin/actions';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';

const AddProducts = () => {
  const dispatch = useDispatch();
  const initForm = { name: '', images:[''], oprice: '', price: '', category: '',description:"",discount:"" }
  const [form, setForm] = useState(initForm);
  const toast = useToast();
  const price = form.oprice.split('-');

  const handleAddImage=()=>{setForm((prevForm)=>({...prevForm,images: [...prevForm.images,'']}))};

  const handleRemoveImage = (index) => {
    setForm((prevForm)=>{
      const newImages = [...prevForm.images];
      newImages.splice(index, 1);
      return {...prevForm,images: newImages};
    })
  }

  const handleImageChange = (index, event) => {
    const newImages = [...form.images];
    newImages[index] = event.target.value;
    setForm({...form, images: newImages});
  };

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const formSubmitHandler=async(e)=>{
    e.preventDefault();
    let discount=(((form.oprice-form.price)/form.oprice)*100).toFixed(0)+'%';
    try { 
      const res = await dispatch(addProduct({...form,discount}));
      console.log('res',res)
      toast({
        title: 'Product Added',
        name: res.msg,
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while adding',
        name: error.message,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
    setForm(initForm)
  }

  // console.log('Add Products is rendering');
  
  return (
    <div>
      <Heading size='md'>Add Products</Heading>
      <Flex>
        <Box mr={'5'}>
          <form onSubmit={formSubmitHandler}>
            <FormControl isRequired>
              <FormLabel>Product Name</FormLabel>
              <Input type='text' name='name' background='#fff' htmlSize={45} width='auto' onChange={formChangeHandler} value={form.name} />
              <FormLabel>Product Brand</FormLabel>
              <Input type='text' name='brand' background='#fff' onChange={formChangeHandler} value={form.brand} />
              <FormLabel>Product Image Link</FormLabel>
              {form.images.map((image, index) => (
                <FormControl key={index} id={`product-image-${index}`}>
                  <FormLabel>Product Image {index + 1}</FormLabel>
                  <Input type="text" value={image} background='#fff' onChange={(e) => handleImageChange(index, e)} />
                  {index > 0 && (<IconButton icon={<DeleteIcon/>} onClick={() => handleRemoveImage(index)}/>)}
                </FormControl>
              ))}
              <IconButton aria-label='Add' icon={<AddIcon />} onClick={handleAddImage} />
              <FormLabel>Product Original Price</FormLabel>
              <Input type='number' name='oprice' background='#fff' onChange={formChangeHandler} value={form.oprice} />
              <FormLabel>Product Discount Price</FormLabel>
              <Input type='number' name='price' background='#fff' onChange={formChangeHandler} value={form.price} />
              <FormLabel>Product Category</FormLabel>
              <Input type='text' name='category' background='#fff' onChange={formChangeHandler} value={form.category} />
              <FormLabel>description</FormLabel>
              <Input type='text' name='description' background='#fff' onChange={formChangeHandler} value={form.description} />
              <Button type='submit' colorScheme='teal' marginTop='2'>Add</Button>
            </FormControl>
          </form>
        </Box>
        <Flex flexDir={'column'} h={'50vh'} alignItems={'center'} justifyContent='center' textAlign='center' bg='white' w={'full'} maxW={'200px'} role={'group'} boxShadow={'2xl'} rounded={'lg'} pos={'relative'} zIndex={1}>
          <Flex rounded={'lg'} justifyContent={'center'} alignItems={'center'} width={'16vw'} textAlign={'center'} pos={'relative'} _after={{
            transition: 'all .3s ease', content: '""', w: 'full', h: 'full', pos: 'absolute', top: 5, left: 0, filter: 'blur(15px)', zIndex: -1,
          }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            {form.images[0] && <Image rounded={'lg'} boxSize={150} objectFit={'cover'} src={form.images[0]} />}
          </Flex>
          <Stack align={'center'}>
            {form.name && <Heading fontSize={'md'} fontFamily={'body'} fontWeight={500}>{form.name}</Heading>}
            <Stack direction={'row'} align={'center'}>
              {form.price && <Text fontWeight={800} fontSize={'md'}>₹{form.price}</Text>}
              {price[0] && <Text textDecoration={'line-through'} color={'gray.600'} textDecor='line-through'>₹{price[0]}</Text>}
              {price[1] && <Text color='green.400'>{price[1]}</Text>}
            </Stack>
            {form.category && <Heading fontSize={'md'} fontFamily={'body'} color={'blue.200'} fontWeight={400}>{form.category}</Heading>}
          </Stack>
        </Flex>
      </Flex>
    </div>
  )
}

export default AddProducts;