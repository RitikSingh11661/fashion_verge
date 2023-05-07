import React from 'react'
import { Heading, Image } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';

const Brands = () => {
    const BrandsImages=[
        'https://www.koovs.com/cdn/shop/files/koovs_logo_for_brand_page-03.jpg?v=1668331785&width=360','https://www.koovs.com/cdn/shop/files/essentials_logo-02.jpg?v=1668331830&width=360','https://www.koovs.com/cdn/shop/files/kangol_logo-01.jpg?v=1668331868&width=360','https://www.koovs.com/cdn/shop/files/brand_logo-01.png?v=1668331907&width=360','https://www.koovs.com/cdn/shop/files/brand_logo-02.png?v=1668331923&width=360','https://www.koovs.com/cdn/shop/files/Ball_logo.jpg?v=1668332152&width=360','https://www.koovs.com/cdn/shop/files/logo-04.jpg?v=1668332188&width=360','https://www.koovs.com/cdn/shop/files/logo-02.jpg?v=1668332226&width=360','https://www.koovs.com/cdn/shop/files/brand_logos_n-08.jpg?v=1668332439&width=360','https://www.koovs.com/cdn/shop/files/brand_logos_n-07.jpg?v=1668332432&width=360','https://www.koovs.com/cdn/shop/files/brand_logos_n-09.jpg?v=1668332464&width=360','https://www.koovs.com/cdn/shop/files/brand_logos_3951c2d8-141f-43a4-8065-9cca52dac9dd.jpg?v=1668332482&width=360'
    ]
  return (
    <div>
        <Heading fontFamily={'SF-Heading-font'} fontWeight={'400'} fontSize={'42px'} gap={10} textDecoration={'underline'}>Brands on koovs</Heading>
        <SimpleGrid columns={8} padding={'80px'}>
         {BrandsImages?.map((el)=>(
            <Image src={el}/>
         ))}
        </SimpleGrid>
    </div>
  )
}

export default Brands