import React from 'react';
import { Link } from 'react-router-dom';
import './Apparels.css';
import APimg from '../../../assets/Images/apparels.webp';
import Navbar from '../../../components/Navbar/Navbar.jsx';
import ContactUs from '../../../components/ContactUs/ContactUs.jsx';
const Apparels = () => {
  return (
    <div className='ap-container'>
      <Navbar/>
      <div className="ap-main-container">
      <div className="a-header">
        APPARELS
      </div>
      <div className='image-area'>
        <img src={APimg} alt="" />
      </div>
      <div className="tagline">
       "Wear Your Confidence - Luxurious Leather Apparel."
      </div>
      <div className="Discount-line">
        *30% Discount on all the products
      </div>
      <div className="product-area">
        <div className="a-div1">
          <div className='product'>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688064/Womenjacketfront_nlcgpy.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Women's Jacket</div>
                  <span className='prices'>₹ 4900 MRP <span className='cut-price'>₹ 7000</span>/-</span>
            </div>
          </div>
        </div>
       

      </div>
      </div>       
      <ContactUs/>
      
    </div>
  )
}

export default Apparels;
