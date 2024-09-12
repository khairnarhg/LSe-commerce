import React,{useRef} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Giftwares.css';
import GFimg from '../../../assets/Images/giftwarescat.webp';
import Navbar from '../../../components/Navbar/Navbar.jsx';
import ContactUs from '../../../components/ContactUs/ContactUs.jsx';

const Giftwares = () => {
  const contactUsRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`, {
      state: { category: 'Giftware' }
    });
  };
  return (
    <div className='gf-container'>
      <Navbar contactUsRef={contactUsRef}/>
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
        *<span className='b-disc'>30%</span> Discount on all the products
      </div>
      <div className="product-area">
        <div className="a-div1">
          <div className='product' onClick={() => handleProductClick('SL116')}>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688061/SL116_6_dlp0s4.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Pen Stand</div>
                  'Flat 30% OFF'
                  <div className='prices'>₹ 914 MRP <span className='cut-price'>₹ 1305</span>/-</div>
            </div>
          </div>
          <div className='product'onClick={() => handleProductClick('SL144')}>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688064/SL144_n453ef.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Jewelery Box</div>
                  'Flat 30% OFF'
                  <div className='prices'>₹ 4515 MRP <span className='cut-price'>₹ 6450</span>/-</div>
            </div>
          </div>
        </div>
        <div className="a-div1">
        <div className='product'onClick={() => handleProductClick('SL176')}>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688062/SL176_4_ox5wep.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Watch Box</div>
                  'Flat 30% OFF'
                  <div className='prices'>₹ 1313 MRP <span className='cut-price'>₹ 1875</span>/-</div>
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

export default Giftwares;
