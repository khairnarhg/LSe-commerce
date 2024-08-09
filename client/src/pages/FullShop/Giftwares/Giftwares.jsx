import React from 'react';
import { Link } from 'react-router-dom';
import './Giftwares.css';
import GFimg from '../../../assets/Images/giftwarescat.webp';
import Navbar from '../../../components/Navbar/Navbar.jsx';
import ContactUs from '../../../components/ContactUs/ContactUs.jsx';

const Giftwares = () => {
  return (
    <div className='gf-container'>
      <Navbar/>
      <div className="gf-main-container">
      <div className="a-header">
       GIFTWARES
      </div>
      <div className='image-area'>
        <img src={GFimg} alt="" />
      </div>
      <div className="tagline">
      "Give the Gift of Luxury - Thoughtful Leather Treasures."
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

export default Giftwares;
