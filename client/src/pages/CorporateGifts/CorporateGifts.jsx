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
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                </div>
                <div className="form-right">
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                </div>
              </div>
              <div className="bada-input">
                <textarea name="" id=""></textarea>
              </div>
              <button className='submit-button'>
                Submit
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
