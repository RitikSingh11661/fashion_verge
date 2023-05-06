import React from 'react'
import { Box } from '@chakra-ui/react'
import Carousel from './../Components/Carousel';
import ItemsCarousel from './../Components/HomepageComp/ItemsCarousel';
import MensCarousel from './../Components/HomepageComp/MensCarousel';
import NewArrivals from '../Components/HomepageComp/NewArrivals';


export const Homepage = () => {
  return (
    <div>
      <Carousel/>
      <ItemsCarousel />
      <MensCarousel />
      <NewArrivals />
    </div>
  )
}
