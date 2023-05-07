import {Box,Flex,Text,IconButton,Button,Stack,Collapse,Icon,Link,Popover,PopoverTrigger,PopoverContent,useColorModeValue,useBreakpointValue,useDisclosure,Image, VStack} from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
import {Link as Goto, useNavigate} from 'react-router-dom'

import {FiAtSign, FiDollarSign, FiLogIn, FiLogOut, FiSearch, FiShoppingCart, FiStar, FiUser} from 'react-icons/fi';
import { useContext } from 'react';
import { authState } from '../ContextProv/AuthContextProv';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const navigate=useNavigate();
    const {isAuth,logoutUser}=useContext(authState);
    console.log('isAuth:', isAuth)

    const handleLogout=()=>{
      logoutUser(false)
      // console.log('Logout')
    }

    const handleLogo=()=>{
      navigate('/')
      // console.log('nside login')
    }
  
    return (
      <Box top={0} bottom={0} position={'sticky'} zIndex={99}>
        <Flex 
          bg={'white'}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} color={'black'} border={'0px solid red'} /> : <HamburgerIcon color={'black'} border={'0px solid red'} w={5} h={5} />
              }
              variant={'black'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Image cursor={'pointer'} onClick={handleLogo} src='https://i.ibb.co/GT0wDv2/fashion1.jpg' width={['40%','40%','10%','7%']} textAlign={useBreakpointValue({ base: 'center', md: 'left' })}/>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'xl'}
              fontWeight={400}
              color={'black'}
              variant={'link'}>
            <FiSearch/>
            </Button>
            <Button
              as={'a'}
              fontSize={'xl'}
              fontWeight={400}
              color={'black'}
              variant={'link'}>
            <FiStar/>
            </Button>
            <Button
              as={'a'}
              fontSize={'xl'}
              fontWeight={400}
              color={'black'}
              variant={'link'}>
            <FiShoppingCart/>
            </Button>
            <Button
              as={'a'}
              fontSize={'xl'}
              fontWeight={400}
              color={'black'}
              variant={'link'}
              >
              <Goto to='/login'><FiLogIn/></Goto>
            </Button>            
            <Button
              as={'a'}
              fontSize={'xl'}
              fontWeight={400}
              color={'black'}
              variant={'link'}
              // color={'white'}
              // bg={'pink.400'}
              // _hover={{
              //   bg: 'pink.300',
              // }}
              >
              <Goto to='/signup'><FiUser/></Goto>
            </Button>
            <Button
              as={'a'}
              fontSize={'xl'}
              fontWeight={400}
              color={'black'}
              variant={'link'}
              cursor={'pointer'}
              onClick={handleLogout}
              >
              <FiLogOut />
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'black');
    const linkHoverColor = useColorModeValue('black', 'black');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4} alignItems={'center'}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('black', 'black')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          // color={'black'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse  in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  const NAV_ITEMS = [
    {
      label: 'Men',
      children: [
        {
          label: 'New in',
        //   subLabel: 'Trending Design to inspire you',
          href: '#',
        },
        {
          label: 'View all',
        //   subLabel: 'Up-and-coming Designers',
          href: '#',
        },        
        {
            label: 'T-shirts',
            // subLabel: 'Trending Design to inspire you',
            href: '#',
          },
          {
            label: 'Jockets & Coats',
            // subLabel: 'Up-and-coming Designers',
            href: '#',
          },        
          {
              label: 'Hoodies & Sweatshirts',
            //   subLabel: 'Trending Design to inspire you',
              href: '#',
            },
            {
              label: 'Sweatpants',
            //   subLabel: 'Up-and-coming Designers',
              href: '#',
            }
      ],
    },
    {
      label: 'Woumen',
      children: [
        {
          label: 'New in',
        //   subLabel: 'Trending Design to inspire you',
          href: '#',
        },
        {
          label: 'Body suite',
        //   subLabel: 'Up-and-coming Designers',
          href: '#',
        },        
        {
            label: 'T-shirts',
            // subLabel: 'Trending Design to inspire you',
            href: '#',
          },
          {
            label: 'Out wear',
            // subLabel: 'Up-and-coming Designers',
            href: '#',
          },        
          {
              label: 'Hoodies & Sweatshirts',
            //   subLabel: 'Trending Design to inspire you',
              href: '#',
            },
            {
              label: 'Sweatpants',
            //   subLabel: 'Up-and-coming Designers',
              href: '#',
            }
      ],
    },
    {
      label: 'Artist Collab',
      children: [
        {
          label: 'Georg Thomas',
          href: '#',
        },
        {
          label: 'Boomranng',
          href: '#',
        },
      ],
    },
    {
      label: 'Collections',
      children: [
        {
          label: 'Y2K',
          href: '#',
        },
        {
          label: 'Goof fest',
          href: '#',
        },
        {
            label: 'Summer Tees',
            href: '#',
          },
          {
            label: 'Varsity',
            href: '#',
          },{
            label: 'Retrograde',
            href: '#',
          },
          {
            label: 'Field day',
            href: '#',
          },
          {
            label: 'Supernova',
            href: '#',
          }
      ],
      href: '#',
    },
  ];