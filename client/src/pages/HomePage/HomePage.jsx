import React from 'react';
import './HomePage.css';
import Carousel from '../../components/Carousel/Carousel';
import ShopByCategory from '../../components/ShopByCategory/ShopByCategory';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import BestSellers from '../../components/BestSellers/BestSellers';
import DottedBorder from '../../components/DottedBorder/DottedBorder';
import AboutUs from '../../components/AboutUs/AboutUs';
import ReviewsHome from '../../components/ReviewsHome/ReviewsHome';
import Navbar from '../../components/Navbar/Navbar';
import ContactUs from '../../components/ContactUs/ContactUs';
const homePage = () => {

  return (
    <div className='main-page'>
      <Navbar className='navbar'/>
      <div className="content">
        <Carousel className='carousel'/>
        <ShopByCategory />
        <BestSellers/>
        <DottedBorder/>
        <NewArrivals />
        {/* <DottedBorder/> */}
        <AboutUs/>
        <ReviewsHome/>
        <ContactUs/>
      </div>
    </div>
  );
};

export default homePage;

 