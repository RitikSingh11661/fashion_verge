import React from 'react'
import { Box } from '@chakra-ui/react'
import Carousel from './../Components/Carousel';
import ItemsCarousel from './../Components/HomepageComp/ItemsCarousel';
import MensCarousel from './../Components/HomepageComp/MensCarousel';
import NewArrivals from '../Components/HomepageComp/NewArrivals';
import TrendingNow from '../Components/HomepageComp/TrendingNow';
import ArtistEdits from '../Components/HomepageComp/ArtistEdits';
import SneakerEdit from '../Components/HomepageComp/SneakerEdit';


export const Homepage = () => {
  return (
    <div>
      <Carousel/>
      <ItemsCarousel />
      <MensCarousel />
      <NewArrivals />
      <TrendingNow/>
      <ArtistEdits/>
      <SneakerEdit/>
    </div>
  )
}
