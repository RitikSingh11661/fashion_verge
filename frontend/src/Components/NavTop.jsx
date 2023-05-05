import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Select,
    HStack,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
  
  export default function NavTop() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          minH={'60px'}
          gap={'30px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          color={'black'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex border={'0px solid red'} flex={{ base: 1 }} justify={{ base: 'center', md: 'space-around' }}>
            <Flex 
              alignItems={'center'}
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'black')}>
              <FiInstagram/> 1.8M Followers
            </Flex>
            <Flex
              justifyContent={'space-between'}
              alignItems={'center'}
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'black')}>
              <FiFacebook/> 627k Followers 
            </Flex>
           
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <HStack
          border={'0px solid black'}
          justifyContent={'space-between'}
            flex={{ base: 2, md: 1 }}>
         <Text fontSize={['8px','10px','10px','16px','16px']}>Open doors to a world of fashion | Young and fresh</Text>
        <Select value={'select'} width={'100px'}>
          <option>English</option>
        </Select>
          </HStack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
  
    return (
      <Stack direction={'row'} spacing={4}>
        (
          <Box >
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                </Link>
              </PopoverTrigger>
            </Popover>
          </Box>
        )
      </Stack>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        // display={{ md: 'none' }}
        >
      </Stack>
    );
  };