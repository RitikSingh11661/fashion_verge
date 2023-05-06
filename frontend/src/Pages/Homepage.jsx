import React from 'react'
import { Box } from '@chakra-ui/react'
import ItemsCarousel from './../Components/HomepageComp/ItemsCarousel';
import MensCarousel from './../Components/HomepageComp/MensCarousel';
import NewArrivals from '../Components/HomepageComp/NewArrivals';
import TrendingNow from '../Components/HomepageComp/TrendingNow';
import ArtistEdits from '../Components/HomepageComp/ArtistEdits';
import SneakerEdit from '../Components/HomepageComp/SneakerEdit';
import Carousel from './../Components/HomepageComp/Carousel';

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
