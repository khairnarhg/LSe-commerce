import React from 'react';
import './TravelBags.css';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar.jsx';
import ContactUs from '../../../components/ContactUs/ContactUs.jsx';
import TBimg from '../../../assets/Images/travelbagscat.webp';
const TravelBags = () => {
  return (
    <div className='tb-container'>
      <Navbar/>
      <div className="tb-main-container">
      <div className="a-header">
        TRAVEL BAGS
      </div>
      <div className='image-area'>
        <img src={TBimg} alt="" />
      </div>
      <div className="tagline">
      "Travel in Style - Your Journey Deserves the Best."
      </div>
      <div className="Discount-line">
        *30% Discount on all the products
      </div>
      <div className="product-area">
        <div className="a-div1">
          <div className='product'>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688065/laptop_3_rdsvkf.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Over nighter</div>
                  <span className='prices'>₹ 4725 MRP <span className='cut-price'>₹ 6750</span>/-</span>
            </div>
          </div>
          <div className='product'>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688067/trolly_2_fwjbaw.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Laptop Trolley</div>
                  <span className='prices'>₹ 9870 MRP <span className='cut-price'>₹ 14100</span>/-</span>
            </div>
          </div>
        </div>
        <div className="a-div1">
        <div className='product'>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688066/luggage_2_dggdrq.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Shoe Duffel</div>
                  <span className='prices'>₹ 4725 MRP <span className='cut-price'>₹ 6750</span>/-</span>
            </div>
          </div>
          
        </div>
      

      </div>

      </div>
      <ContactUs/>
    </div>
  )
}

export default TravelBags;
