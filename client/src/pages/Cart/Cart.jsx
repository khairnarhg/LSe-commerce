import React from 'react';
import './Cart.css';
import Navbar from '../../components/Navbar/Navbar';
import ContactUs from '../../components/ContactUs/ContactUs';
const Cart = () => {
  return (
    <div className='cart-main-container'>
      <Navbar/>
      <div className="cart-container">
        <div className="cart-white-blur-bg">
          <div className="cart-header">
            Shopping Cart
          </div>
        </div>
      </div>
      <ContactUs/>
    </div>
  )
}

export default Cart;
