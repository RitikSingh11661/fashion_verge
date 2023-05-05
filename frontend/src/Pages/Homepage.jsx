import React from 'react'
import Carousel from '../Components/Carousel'
import { Box } from '@chakra-ui/react'
import ItemsCarousel from './../Components/ItemsCarousel';
import MensCarousel from '../Components/MensCarousel';


export const Homepage = () => {
  return (
    <div>
      <Carousel/>
      <ItemsCarousel />
      <MensCarousel/>
    </div>
  )
}
