import React from 'react';
import { Flex, Box, FormControl, FormLabel, Input, InputGroup, InputRightElement, Stack, Button, Heading, Text, useColorModeValue, Link, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as Goto, useNavigate } from 'react-router-dom'
import { signup } from '../Redux/Auth/actions';
import { useDispatch } from 'react-redux';

const Signup = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const navigate = useNavigate();
  const toast = useToast();

  const wait = () => {
    return toast({
      title: "Signing up",
      description: `Please wait`,
      status: "loading",
      duration: 3000,
      position: "top",
      isClosable: true,
    });
  }

  let signUpSucceed = (msg) => {
    return toast({
      title: "Successfully created your account.",
      description: msg,
      status: "success",
      duration: 3000,
      position: "top",
      isClosable: true,
    });
  };
  const handleSubmit = async (e, user = { name, email, password, city, role: 'user', wallet: 100 }) => {
    if (typeof e !== 'number') e.preventDefault();
    wait();
    try {
      const res = await dispatch(signup(user));
      signUpSucceed(res?.data.msg);
      navigate("/login")
    } catch (error) {
      console.log('error', error)
      toast({
        title: "Unable to create account",
        description: `${error.response?.data.msg}`,
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }
  };

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} color={'black'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} width={['90%', '35%']} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={['3xl', '4xl']} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>
              </Box>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                  <InputRightElement h={'full'}>
                    <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="city" isRequired>
                <FormLabel>City</FormLabel>
                <Input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{ bg: 'blue.500' }}
                  width={'100%'}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={4}>
                <Text align={'center'}>
                  Already a user?{' '}
                  <Link as={Goto} to="/login" color={'blue.400'}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  )
}

export default Signup;