import React from 'react'
import ItemsCarousel from './../Components/HomepageComp/ItemsCarousel';
import MensCarousel from './../Components/HomepageComp/MensCarousel';
import NewArrivals from '../Components/HomepageComp/NewArrivals';
import TrendingNow from '../Components/HomepageComp/TrendingNow';
import ArtistEdits from '../Components/HomepageComp/ArtistEdits';
import SneakerEdit from '../Components/HomepageComp/SneakerEdit';
import Carousel from './../Components/HomepageComp/Carousel';
import DeliveryPattern from '../Components/HomepageComp/DeliveryPattern';
import Brands from '../Components/HomepageComp/Brands';

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
      <Brands/>
      <DeliveryPattern/>
    </div>
  )
}
