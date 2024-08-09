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
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688064/IMPBELT_qfn8ns.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Imp Belt</div>
                  <span className='prices'>₹ 788 MRP <span className='cut-price'>₹ 1125</span>/-</span>
            </div>
          </div>
          <div className='product'>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688064/IMPBELT2_zvaeuj.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Men's Belt</div>
                  <span className='prices'>₹ 623 MRP <span className='cut-price'>₹ 890</span>/-</span>
            </div>
          </div>
        </div>
        <div className="a-div1">
        <div className='product'>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688061/walletBr_mi0ofc.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Imp Belt</div>
                  <span className='prices'>₹ 578 MRP <span className='cut-price'>₹ 825</span>/-</span>
            </div>
          </div>
          <div className='product'>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688061/walletT_yc5avt.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Imp Belt</div>
                  <span className='prices'>₹ 525  MRP <span className='cut-price'>₹ 750</span>/-</span>
            </div>
          </div>
        </div>
        <div className="a-div3">
        <div className='product'>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688061/wallet_vdjvef.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Imp Belt</div>
                  <span className='prices'>₹ 441 MRP <span className='cut-price'>₹ 630</span>/-</span>
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
