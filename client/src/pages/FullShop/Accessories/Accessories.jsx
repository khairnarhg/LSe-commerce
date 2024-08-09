import React from 'react';
import './Accessories.css';
import { Link } from 'react-router-dom';
import Accessoriescat from '../../../assets/Images/accessoriescat.webp';
import Navbar from '../../../components/Navbar/Navbar.jsx';
import ContactUs from '../../../components/ContactUs/ContactUs.jsx';

const Accessories = () => {
  return (
    <div className='accessories-container'> 
    <Navbar/>
    <div className='acccessories-main-container'>
      <div className="a-header">
        ACCESSORIES
      </div>
      <div className='image-area'>
        <img src={Accessoriescat} alt="" />
      </div>
      <div className="tagline">
        "Elevate Every Detail with Luxurious Leather Accessories."
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

export default Accessories;
