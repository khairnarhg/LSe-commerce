import React, { useRef } from 'react';
import './AboutUs.css';
import Navbar from '../../components/Navbar/Navbar';
import ContactUs from '../../components/ContactUs/ContactUs';
import img1 from '../../assets/bg/abt1.webp';
import img2 from '../../assets/bg/abt2.webp';
import logo from '../../assets/logos/newlogonobgw.png';
const AboutUs = () => {
  const contactUsRef = useRef(null);
  return (
    <div className='aboutus-main-container'>
      <Navbar contactUsRef={contactUsRef}/>
      <div className="big-aboutus-container">
        <div className="big-aboutus-heading-group">
          <div className="baboutusline1"></div>
          <div className="baboutusheader">
            About Us
          </div>
          <div className="baboutusline2"></div>
        </div>
        <div className="image-area">
          <img src={img1} alt="imgg1" />
          <img src={img2} alt="imgg2" />
        </div>
        <div className="big-aboutus-footer-group">
          <div className="baboutusline3"></div>
          <div className="baboutusfooter">
            <img src={logo} alt="logoabt" />
          </div>
          <div className="baboutusline4"></div>
        </div>


      </div>
      <div ref={contactUsRef}>
        <ContactUs />
      </div>
    </div>
  )
}

export default AboutUs;
