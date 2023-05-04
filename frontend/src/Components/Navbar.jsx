import { Box, Flex, Text, Button, Stack, Image, Input, useColorModeValue, useBreakpointValue, FormControl, Select, Heading } from '@chakra-ui/react';
import { SearchIcon} from '@chakra-ui/icons';
import {Link as Goto, Link, useNavigate, useSearchParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { FiArrowDown, FiChevronDown, FiFacebook, FiInstagram, FiLogOut, FiShoppingCart, FiUser } from 'react-icons/fi';
// const getUrl=(url,search)=>{
   
//   if(search){
//       return (url=`${url}?q=${search}`)
//   }
//   return url;
// }

export default function Navbar() {

// Search Functionality
//     let [searchParam,setSearchParam] = useSearchParams()
//     const [searchQuery,setSearchQuery] =useState('')
//     console.log('searchQuery:', searchQuery)



//      useEffect(()=>{
//       let apiUrl = getUrl(`https://royalrento.onrender.com/AllProducts`,
//       searchQuery
//     )
//      fetchdata(apiUrl)
//    },[searchQuery])

//     const [s,setS] = useState('')
//     console.log('s:', s)

//     const handleInput=(e)=>{
//         setS(e.target.value)

//     }

//     const handleSearch=()=>{
//         setSearchQuery(s);
//         navigate('/results')
//         setS('')
//     }


//     useEffect(()=>{
//         let objPar= {}
//         if (searchQuery){
//             objPar.q=searchQuery
//         }
//         setSearchParam(objPar);
//     },[searchQuery])
  
    return (
      <Box backgroundColor='white' position='sticky' top='0' bottom='0' zIndex={'1'} >
        <Flex width={'100%'} color={'black'} alignItems={'center'} mr={'30px'} gap={'30'} borderBottom={'1px solid grey'}>
          <Flex ml={'60px'} gap={'10px'} alignItems={'center'}>
          <FiInstagram color='black'/>1.8M Followers
          </Flex>
          <Flex gap={'10px'} alignItems={'center'}>
          <FiFacebook color='black'/>682k Followers
          </Flex>
        <Text border={'0px solid red'} ml={'200px'} align={'center'} color={'black'}>Open doors to a world of fashion | Young and fresh</Text>
        <Select width={'10%'} ml={'300px'}>
          <option>English</option>
        </Select>
        </Flex>
      <Box p={'0px 60px'}>
      <Flex backgroundColor='202020'
        direction={['column','column','column','row','row']}
        rowGap={['10px','10px','10px']}
        minH={'60px'}
        borderBottom={1}
        borderStyle={'solid'}
        align={'center'}>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Flex align='center' width={'60%'} mr={'250px'} rowGap={'50px'} color={'black'} justifyContent={'space-between'} >
          <Link id="top" to="/bestdeal">
            <Flex align={'center'}>Men<FiChevronDown/></Flex>
          </Link>
          <Link to="/hwhome" id="top">
            <Flex align={'center'}>Woumen<FiChevronDown/></Flex>
          </Link>
          <Flex align={'center'} id="deal">Artist Collab<FiChevronDown/></Flex>
          <Flex align={'center'} className="other other1">Collection<FiChevronDown/></Flex>
        </Flex>
        <Box width={['100%','100%','100%']} ><Goto to='/' ><Image w={"15%"} borderRadius={'40%'} src={'https://i.ibb.co/GT0wDv2/fashion1.jpg'} alt="logo" /></Goto></Box>
       <Box display='flex'
          justify={'flex-end'}
          direction={'row'}
        //   spacing={6}
          // gap='10px'
          alignItems={'center'}>
        <Button type="submit" bg={'grey'} ml={-5} size={"md"}><SearchIcon width={'28px'} color={'black'}/>
        </Button>
      </Box>
      </Flex>

      <Box display='flex'
          justify={'flex-end'}
          direction={'row'}
        //   spacing={6}
          gap='10px'
          marginRight ='15px'
          alignItems={'center'}
          >        
        <Stack
          flex={{ base: 1, md: 1 }}
          justify={'flex-end'}
          direction={'row'}
          width={'5%'}
          spacing={5}
          marginLeft={10}
          border={'0px solid green'}>
          {/* <Button color="white" bg={"none"} fontWeight="600" fontSize={20}>
            Hello, {UserName}
          </Button>        */}
        {/* <Login />        */}
          <Goto to='/'><Button background={'#9a455b'} _hover={{
          bg:'#f40b49'
        }}  onClick={''} color={'white'} >
          <FiUser/>
          </Button> </Goto>
          <Goto to='/cart'><Button background={'orange.500'} _hover={{
          bg:'orange.600'
        }} color={'white'}>
          <FiShoppingCart/></Button></Goto>
        </Stack>

      </Box>
      </Flex>
    </Box>


    <Flex direction={['column','column', 'row']} paddingBottom={'2px'} paddingTop='2px' bg={'#202020'} color={'white'} id="buttons" justifyContent={'space-around'} border={'0px solid red'} width={'100%'}>
        
      </Flex>
    </Box>
    );
  }
