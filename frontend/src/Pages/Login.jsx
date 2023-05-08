import { Input,Button, Heading, Stack, FormControl, FormLabel, Flex, Checkbox, Image, InputGroup, InputRightElement,Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useRef } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { authState } from '../ContextProv/AuthContextProv'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {loginUser,isAuth,handleToken,token}=useContext(authState);
    // console.log('isAuth:', isAuth)
    const [showPassword, setShowPassword] = useState(false);
    
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const payload={
            email,
            password
        }

        fetch("http://localhost:4500/users/login",{
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
       }).then(res=>res.json())
       .then(res=>{
         if(res.token){
          // console.log(res.token)
          localStorage.setItem('token',res.token)
          loginUser(true)   
          handleToken(res.token)
          alert('Login Succesful !')
        }else{
          alert('Wrong Credentials !')
        }
     })
       .catch(err=>console.log('err',err))
    }

    if(isAuth){
        return <Navigate to='/' />
    }

  return (
    <div className="login-page" style={{color:'black'}}>
     <Stack minH={'10vh'} marginTop='30px' direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'} flexDirection={['columns','columns','columns',null]}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <form onSubmit={handleSubmit} >
          <FormControl id="email" color={'black'}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="email" isInvalid errorBorderColor='black' value={email} onChange={(e)=>setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password" >
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input type={showPassword ? password : 'password'} placeholder="password" isInvalid errorBorderColor='black' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <InputRightElement h={'full'} >
                  <Text
                    variant={'white'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
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
        <Image width={'90%'} height='450px'
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
    </div>
  )
}

export default Login