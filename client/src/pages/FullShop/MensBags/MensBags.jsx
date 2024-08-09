import React from 'react';
import { Link } from 'react-router-dom';
import './MensBags.css';
import Navbar from '../../../components/Navbar/Navbar.jsx';
import ContactUs from '../../../components/ContactUs/ContactUs.jsx';
import MBimg from '../../../assets/Images/mensbagscat.webp';

const MensBags = () => {
  return (
    <div className='mb-container'>
      <Navbar/>
      <div className="mb-main-container">
      <div className="a-header">
        MEN'S BAGS
      </div>
      <div className='image-area'>
        <img src={MBimg} alt="" />
      </div>
      <div className="tagline">
      "Style Meets Functionality - Discover Your Perfect Companion."

      </div>
      <div className="Discount-line">
        *30% Discount on all the products
      </div>
      <div className="product-area">
        <div className="a-div1">
          <div className='product'>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688070/bag_f1eqaj.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Back Pack</div>
                  <span className='prices'>₹ 3885 MRP <span className='cut-price'>₹ 5550</span>/-</span>
            </div>
          </div>
          <div className='product'>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688059/sidebagblack_ewkil6.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Messenger</div>
                  <span className='prices'>₹ 3507 MRP <span className='cut-price'>₹ 5010</span>/-</span>
            </div>
          </div>
        </div>
        <div className="a-div1">
        <div className='product'>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688069/laptoptan_2_t8d7or.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Sleek Laptop Bag</div>
                  <span className='prices'>₹ 2730 MRP <span className='cut-price'>₹ 3900</span>/-</span>
            </div>
          </div>
          <div className='product'>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688068/2n1bag_2_ghpxsr.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>5 in 1 Bag</div>
                  <span className='prices'>₹ 5355  MRP <span className='cut-price'>₹ 7650</span>/-</span>
            </div>
          </div>
        </div>
       

      </div>

      </div>
      <ContactUs/>
    </div>
  )
}

export default MensBags;
