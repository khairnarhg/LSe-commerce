import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import ShopByCategory from '../../components/ShopByCategory/ShopByCategory';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import BestSellers from '../../components/BestSellers/BestSellers';
import DottedBorder from '../../components/DottedBorder/DottedBorder';
import AboutUs from '../../components/AboutUs/AboutUs';
const homePage = () => {
  return (
    <div className='main-page'>
      <Carousel />
      <ShopByCategory />
      <BestSellers/>
      <DottedBorder/>
      <NewArrivals />
      <DottedBorder/>
      <AboutUs/>
    </div>
  );
};

export default homePage;

 