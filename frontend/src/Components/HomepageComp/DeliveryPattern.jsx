import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const DeliveryPattern = () => {
  return (
    <div>
        <Box width={'99%'} margin={'auto'} textAlign='center' p={'40px'} border={'1px solid grey'} >
           <SimpleGrid columns={[1,2,4,4]} width={'83%'} border='0px solid red' margin={'auto'} p={'40px'} gap='30px' >
            <Flex align='center'  gap={'5px'} width={'100%'} >
             <Image width='15%' src='https://www.koovs.com/cdn/shop/files/delivery-truck.png?v=1668332734&width=360' alt='img1' />
             <Flex direction={'column'}>
             <Heading color='teal' lineHeight={'30px'} noOfLines={2} fontSize={'18px'}>Free shipping</Heading>
             <Text noOfLines={2} fontSize={'13px'}>For orders above INR 1500.</Text>
             </Flex>
            </Flex>
            <Flex align='center'  gap={'5px'} width={'100%'} >
             <Image width='15%' src='https://www.koovs.com/cdn/shop/files/money-back.png?v=1668332753&width=360' alt='img1' />
             <Flex direction={'column'}>
             <Heading color='teal' lineHeight={'30px'} noOfLines={2} fontSize={'18px'}>Money Guarantee</Heading>
             <Text noOfLines={2} fontSize={'13px'}>Within 30 days for an exchange.</Text>
             </Flex>
            </Flex>
            <Flex align='center' gap={'5px'} width={'100%'} >
             <Image width='10%' src='https://www.koovs.com/cdn/shop/files/customer-care.png?v=1668332773&width=360' alt='img1' />
             <Flex direction={'column'}>
             <Heading color='teal' lineHeight={'30px'} noOfLines={2} fontSize={'18px'}>Online Support</Heading>
             <Text  noOfLines={2} fontSize={'13px'}>10 AM - 6 PM, Mon - Sat</Text>
             </Flex>
            </Flex>
            <Flex align='center' gap={'5px'} width={'100%'} >
             <Image width='10%' src='https://www.koovs.com/cdn/shop/files/credit-card.png?v=1668332788&width=360' alt='img1' />
             <Flex direction={'column'}>
             <Heading color='teal' lineHeight={'30px'} noOfLines={2} fontSize={'18px'}>Flexible Payment</Heading>
             <Text noOfLines={2} fontSize={'13px'}>Pay with Multiple Credit Cards</Text>
             </Flex>
            </Flex>  
           </SimpleGrid>
    </Box>
</div>
  )
}

export default DeliveryPattern