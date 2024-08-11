import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Apparels.css';
import APimg from '../../../assets/Images/apparels.webp';
import Navbar from '../../../components/Navbar/Navbar.jsx';
import ContactUs from '../../../components/ContactUs/ContactUs.jsx';
const Apparels = () => {
  const contactUsRef = useRef(null);
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`, {
      state: { category: 'Jacket' }
    });
  };
  return (
    <div className='ap-container'>
      <Navbar contactUsRef={contactUsRef}/>
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
          <div className='product' onClick={() => handleProductClick('SL233')}>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688064/Womenjacketfront_nlcgpy.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Women's Jacket</div>
                  <span className='prices'>₹ 4900 MRP <span className='cut-price'>₹ 7000</span>/-</span>
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

export default Apparels;
