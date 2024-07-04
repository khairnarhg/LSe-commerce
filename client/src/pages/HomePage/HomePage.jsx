import React from 'react';
// import './HomePage.css';
import Carousel from '../../components/Carousel/Carousel';
import ShopByCategory from '../../components/ShopByCategory/ShopByCategory';
const homePage = () => {
  return (
    <div className='main-page'>
      <Carousel />
      <ShopByCategory />
    </div>
  );
};

export default homePage;

 