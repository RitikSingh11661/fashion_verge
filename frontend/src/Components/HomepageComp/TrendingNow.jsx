import React from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

const TrendingNow = () => {
  return (
    <div style={{color:'black'}}>
        <Heading fontFamily={'SF-Heading-font'} color={'black'} p={'25px'} fontSize={'42px'} fontWeight={'500'}>Trending Now</Heading>
            <Flex width={'100%'} margin={'auto'} gap={'20px'} p={'0px 100px'}>
                <Box>
                <Image h={['35vh','50vh','100vh','110vh']} src='https://www.koovs.com/cdn/shop/files/Koovs-16march23_SWIM1289_copy.jpg?v=1680269385&width=940'/>
                <Text textAlign={'left'} fontFamily={'SF-Body-font - 500'} fontSize={'18px'}>Retrograde</Text>
                </Box>
                <Box>
                <Image h={['35vh','50vh','100vh','110vh']} src='https://www.koovs.com/cdn/shop/files/Screenshot_2023-03-31_at_7.07.06_PM.png?v=1680269839&width=940'/>
                <Text textAlign={'left'} fontFamily={'SF-Body-font - 500'} fontSize={'18px'}>Koovs x Boomranng</Text>
                </Box>
            </Flex>
    </div>
  )
}

export default TrendingNow