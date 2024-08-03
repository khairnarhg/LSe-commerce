import React from 'react';
import './CorporateGifts.css';
import Navbar from '../../components/Navbar/Navbar';
import ContactUs from '../../components/ContactUs/ContactUs';
import Cgbg from '../../assets/bg/bg2.webp';
const CorporateGifts = () => {
  return (
    <div className="corporate-gifts-main-container">
      <Navbar/>
      <div className="corporate-gifts-container">
        <div className='cg-white-blur-bg'>
          <div className="intro-image">
            <img src={Cgbg} alt="" />
          </div>
          <div className="form-area">
            <div className="form-title-cg">
              Get In Touch With Us
            </div>
            <form className='CG-Form'>
              <div className='chote-inputs'>
                <div className="form-left">
                  <input type="text" placeholder='First Name*'/>
                  <input type="text" placeholder='Email Address*'/>
                  <input type="text" placeholder='Company*'/>
                  <input type="text" placeholder='Quantities*'/>
                </div>
                <div className="form-right">
                  <input type="text" placeholder='Last Name*'/>
                  <input type="text" placeholder='Phone*'/>
                  <input type="text" placeholder='Country*'/>
                  <input type="text" placeholder='Product*'/>
                </div>
              </div>
              <div className="bada-input">
                <textarea name="" id="big-input" placeholder='Add a message (optional)' ></textarea>
              </div>
              <button className='submit-button'>
                Send
              </button>
            </form>
            <div className="extra-info">
              <span className='extra-info1'>We will be happy to assist you with your queries feel free to get in touch with us at leatherandstyle72@gmail.com</span>
              <span className='extra-info2'>Visit the shopping catalog to go through our products</span>
            </div>
          </div>
        </div>
      </div>
      <ContactUs/>
    </div>
  )
}

export default CorporateGifts;
