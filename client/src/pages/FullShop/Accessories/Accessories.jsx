import React,{useRef} from 'react';
import './Accessories.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Accessoriescat from '../../../assets/Images/accessoriescat.webp';
import Navbar from '../../../components/Navbar/Navbar.jsx';
import ContactUs from '../../../components/ContactUs/ContactUs.jsx';

const Accessories = () => {
  const contactUsRef = useRef(null);

  const navigate = useNavigate();
  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`, {
      state: { category: 'Accessories' }
    });
  };
  return (
    <div className='accessories-container'> 
    <Navbar contactUsRef={contactUsRef}/>
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
        *<span className='b-disc'>30%</span> Discount on all the products
      </div>
      <div className="product-area">
        <div className="a-div1">
          <div className='product' onClick={() => handleProductClick('SL156')}>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688064/IMPBELT_qfn8ns.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Imp Belt</div>
                  'Flat 30% OFF'
                  <div className='prices'>₹ 788 MRP <span className='cut-price'>₹ 1125</span>/-</div>
            </div>
          </div>
          <div className='product'onClick={() => handleProductClick('MBPRMD')}>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688064/IMPBELT2_zvaeuj.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Men's Belt</div>
                  'Flat 30% OFF'
                  <div className='prices'>₹ 623 MRP <span className='cut-price'>₹ 890</span>/-</div>
            </div>
          </div>
        </div>
        <div className="a-div1">
        <div className='product'onClick={() => handleProductClick('SL175')}>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688061/walletBr_mi0ofc.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Sovereign Wallet</div>
                  'Flat 30% OFF'
                  <div className='prices'>₹ 578 MRP <span className='cut-price'>₹ 825</span>/-</div>
            </div>
          </div>
          <div className='product'onClick={() => handleProductClick('SUP8061')}>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688061/walletT_yc5avt.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Luxor Wallet</div>
                  'Flat 30% OFF'
                  <div className='prices'>₹ 525  MRP <span className='cut-price'>₹ 750</span>/-</div>
            </div>
          </div>
        </div>
        <div className="a-div3">
        <div className='product'onClick={() => handleProductClick('SUP815')}>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688061/wallet_vdjvef.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Imperial Vault</div>
                  'Flat 30% OFF'
                  <div className='prices'>₹ 441 MRP <span className='cut-price'>₹ 630</span>/-</div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div ref={contactUsRef}>
        <ContactUs />
      </div>
    </div>

  )
}

export default Accessories;
