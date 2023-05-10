import { Input, Button, Heading, Stack, FormControl, FormLabel, Flex, Checkbox, Image, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { authState } from '../ContextProv/AuthContextProv'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { setLogin } from "../Redux/Auth/actions";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { loginUser, isAuth, handleToken, token } = useContext(authState);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  const dispatch = useDispatch();
  const comingFrom = location.state?.from?.pathname || "/";

  const handleSubmit = async (e, user = { email, password }) => {
    if (typeof e !== 'number') e.preventDefault();
    toast(
      {
        title: "Logging in",
        description: `Please wait`,
        status: "loading",
        duration: 2000,
        position: "top",
        isClosable: true
      });
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API_AI}/${userType}/login`, JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } })
      console.log('data',data)
      const userType=user?.email?.includes('admin') ? 'admins' : 'users';
      localStorage.setItem("token", data.token);
      toast({
        title: data.msg,
        description: `Welcome ${userType === 'users' ? 'User' : 'Admin'} ${user.email}`,
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      dispatch(setLogin);
      navigate(userType === 'admins' ? '/admin' : comingFrom, { replace: true })
    } catch (err) {
      toast({
        title: "Wrong Creadentials.",
        description: `Please register ${user.email}`,
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }
  };

  if (isAuth) return <Navigate to='/' />

  return (
    <div className="login-page" style={{ color: 'black' }}>
      <Stack minH={'10vh'} marginTop='30px' direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'} flexDirection={['columns', 'columns', 'columns', null]}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <form onSubmit={handleSubmit} >
              <FormControl id="email" color={'black'} isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="email" isInvalid errorBorderColor='black' value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? password : 'password'} placeholder="password" isInvalid errorBorderColor='black' value={password} onChange={(e) => setPassword(e.target.value)} />
                  <InputRightElement h={'full'} >
                    <Text variant={'white'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Text>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={6}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox isInvalid errorBorderColor='blue' >Remember me</Checkbox>
                  <Link color={'blue.500'}>Forgot password?</Link>
                </Stack>
                <Button type="submit" colorScheme={'blue'} variant={'solid'}>
                  Sign in
                </Button>
              </Stack>
            </form>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image width={'90%'} height='450px' alt={'Login Image'} objectFit={'cover'}
            src={'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'}
          />
        </Flex>
      </Stack>
    </div>
  )
}

export default Login