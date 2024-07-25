import React from 'react'
import logo from '../../assets/logos/newlogonobgw.png';
import './ComingSoon.css';
import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/ShopByCategory/ShopByCategory';
import AboutUs from  '../../components/AboutUs/AboutUs';
import ContactUs from '../../components/ContactUs/ContactUs';


const ComingSoon = () => {
  return (
    <div className='coming-soon-container'>
        <div className='nav'>
            <div className='upperHalf1'>
                <div className="logo-text-group1">
                    <img src={logo} alt="Logo" className="logo1" />
                    <span className="site-title1">Leather and Style</span>
                </div>
            </div>
        </div>
        <Carousel/>
        <Categories/>
        <AboutUs/>
        <ContactUs/>
    </div>
  );
}

export default ComingSoon
