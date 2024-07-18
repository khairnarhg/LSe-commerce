import React from 'react';
import './AboutUs.css';
import img1 from '../../assets/Images/women-aboutUs.webp';
import img2 from '../../assets/Images/aboutUs.webp';
import img3 from '../../assets/Images/men-aboutUs.webp';

const AboutUs = () => {
  return (
    <div className='aboutUs-container'>
      <div className="img1">
        <img src={img1} alt="women" />
      </div>
      <div className="img2">
        <img src={img2} alt="about" />
      </div>
      <div className="img3">
        <img src={img3} alt="men" />
      </div>
    </div>
  );
}
export default AboutUs;
