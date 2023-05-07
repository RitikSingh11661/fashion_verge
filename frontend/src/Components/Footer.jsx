import { Box, Container, Link, SimpleGrid, Stack, Heading, Image, Text, useColorModeValue, Flex, HStack, VStack, Button, Center } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaMobile, FaTwitter, FaYoutube, FaBold, FaBed, FaBiking, FaThumbtack } from 'react-icons/fa';
import {Link as Goto} from 'react-router-dom'
import ModalComp from './ModalComp';

export default function Footer() {
  return (<div>
    <hr />
    <br />
    <Box borderRadius={'18px'} border={'0px solid red'}  boxShadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'>
    <Box
      border={'0px solid red'}
      bg={useColorModeValue('white.50', 'white.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid 
          border={'0px solid red'}
          columns={[2,2,4,4]}
          color={'black'}
          width={'100%'}
          spacing={15}>
          <Stack w={'95%'} alignItems={'center'} border={'0px solid red'} fontFamily={'ABScript'} align={'flex-start'}>
            <Heading fontSize='25px' color='black'>About</Heading>
            <Link href={'#'}>Our story</Link>
            <Link href={'#'}>Contact us</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Privacy policy</Link>
            <ModalComp/>
          </Stack>
          <Stack w={'95%'}  alignItems={'center'} border={'0px solid red'} fontFamily={'ABScript'} align={'flex-start'}>
            <Heading fontSize='25px' color='black'>Support</Heading>
            <Link href={'#'}>Payments</Link>
            <Link href={'#'}>Returns/Exchange</Link>
            <Link href={'#'}>Shipment</Link>
            <Link href={'#'}>Terms & conditions</Link>
            <Image width='200px' height={'45px'} src='https://www.davidsbridal.com/media/footer/download-google-play.png'/>
          </Stack>
          <Stack w={'95%'} alignItems={'center'} border={'0px solid red'} fontFamily={'ABScript'} align={'flex-start'}>
            <Heading fontSize='25px' color='black'>Customer Care</Heading>
            <Link href={'#'}>Timings: 10 AM - 6 PM (Mon - Sat)</Link>
            <Link href={'#'}>Call: +91 7011263423</Link>
            <Link href={'#'}>E-Mail: care@koovs.com</Link>
            <br />
            <Image width='200px' height={'45px'} src='https://www.davidsbridal.com/media/footer/download-app-store.png'/>
          </Stack>
          <Stack w={'90%'} alignItems={'center'} border={'0px solid red'}>
              <Goto to='/'><Image height='150px' marginLeft={'-5px'} src='https://i.ibb.co/GT0wDv2/fashion1.jpg' alt='logo'/></Goto>
           
          </Stack>
        </SimpleGrid>
      </Container>
      <hr />
      <Flex gap='25%' color={'black'} justifyContent='space-around' direction={['column','column','row','row','row']} >
            <Flex >
            <Text fontSize={'md'}>
              © 2023 Fashion Verge. All rights reserved
            </Text>
            </Flex>

            <HStack spacing='26px'>
            <FaInstagram size={'25px'}/>
            {/* <FaMobile size={'25px'} />
            <FaBed size={'25px'}/>
            <FaBiking size={'25px'}/>
            <FaThumbtack size={'25px'}/> */}
            
            <FaTwitter size={'25px'} />
            <FaGithub size={'25px'} />
            <FaYoutube size={'25px'} />
            <FaLinkedinIn size={'25px'} />
            </HStack>
       </Flex>
       <br />
    </Box>
    </Box>
    {/* <br /> */}
</div>
  );
}