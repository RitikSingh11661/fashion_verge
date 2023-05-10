import React from 'react';
import {Flex, Box,FormControl,FormLabel,Input,InputGroup,HStack,InputRightElement,Stack,Button,Heading,Text,useColorModeValue,Link,useToast} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {Link as Goto, useNavigate} from 'react-router-dom'
import { signup } from '../Redux/Auth/actions';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Signup = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);       
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [city,setCity]=useState('')
    const navigate = useNavigate();
    const toast = useToast();

    const handleSubmit = async(e, user={name,email,password,city,role:'user'}) => {
      if (typeof e!=='number')e.preventDefault();
      console.log('user',user)
      const res=await axios.post(`${process.env.REACT_APP_API_AI}/users/register`, JSON.stringify(user), {
          headers: {'Content-Type': 'application/json'}
      }).then(() => {
          dispatch(signup(user)).then(() => {navigate("/login")});
      }).catch(()=>{
          toast({
              title: "User already exist.",
              description: `Try different ${user.email}`,
              status: "error",
              duration: 3000,
              position: "top",
              isClosable: true,
          });
      })
  };


  return (
<Flex minH={'100vh'} align={'center'} justify={'center'} color={'black'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} width={'35%'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>Sign up</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>to enjoy all of our cool features ✌️</Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </FormControl>
              </Box>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? password : 'password'} value={password} onChange={(e)=>setPassword(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="city" isRequired>
                  <FormLabel>City</FormLabel>
                  <Input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
                </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                onClick={handleSubmit}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}><Goto to='/login'>Login</Goto></Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Signup

        // Name: <input type="text"  placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        // Email: <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        // Password: <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        // City: <input type="text" placeholder='Enter City' value={city} onChange={(e)=>setCity(e.target.value)}/>
        // <button onClick={handleSubmit}>Submit</button>