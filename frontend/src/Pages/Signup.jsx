import { React } from 'react';
import {Flex, Box,FormControl,FormLabel,Input,InputGroup,HStack,InputRightElement,Stack,Button,Heading,Text,useColorModeValue,Link,} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {Link as Goto} from 'react-router-dom'

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
                
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [city,setCity]=useState('')
    const [role,setRole]=useState('')

    const handleSubmit=(e)=>{
      e.preventDefault();
        const payload={
          name,
          email,
          password,
          city,
          role
        }
       console.log('payload:', payload)

       fetch("http://localhost:4500/users/register",{
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
       }).then(res=>res.json())
       .then(res=>{
        console.log(res)
        alert('Signup Succesful')
      })
       .catch(err=>console.log(err))
    }

  return (
<Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      color={'black'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      >
      <Stack spacing={8} mx={'auto'} width={'35%'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
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
                <FormControl id="city" isRequired>
                  <FormLabel>Role</FormLabel>
                  <Input type="text" value={role} onChange={(e)=>setRole(e.target.value)}/>
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