import React from 'react';
import bg3 from '../../assets/bg/bg3.png';
import bg4 from '../../assets/bg/bg4.png';
import './AboutUs.css';
import bg1 from '../../assets/bg/bg1.png';
import border from '../../assets/bg/border.jpeg'
export default function AboutUs() {
  return (
    <div>
      <img src={bg1} alt="img" id='image1'/> 
      <h1 >About Us</h1>
    
      <div className="border-container">
      <img src={border} alt="" className="border-image" />
      <div className="content-container">
        <h1>Leather & Style</h1>
        <img src={bg3} alt="Leather and Style" className="hero-image1" />
       
        <h4>Leather & Style: Where Timeless Design Meets Unmatched Quality</h4>
        <p>Leather & Style is your destination for exquisite leather goods crafted with a passion for both heritage and innovation. We're situated in Thane West, India, but our reach extends far beyond, curating a collection of only the finest leather products for the discerning customer.</p>
        <h4>Beyond Products: An Experience of Excellence</h4>
        <p>At Leather & Style, we believe the customer experience is paramount. Our knowledgeable staff is passionate about leather and dedicated to helping you find the perfect piece that complements your style and needs. Whether you're browsing our online store or visiting our Thane West location, we offer personalized service and expert advice to ensure a seamless and enjoyable shopping experience.</p>
        <h4>More than just a store, Leather & Style is a destination for those who appreciate the finer things in life. We invite you to explore our curated collection and discover the difference that quality leather makes.</h4>
        </div>
        </div>
      <div className="border-section">
      <img src={border} alt="" className="border-image1" />
       <div className="content-section">
        <h1>Our Partner</h1>
        <img src={bg4} alt="Our Partner" className="hero-image1" />
        <h4>Our Partner: Stan India</h4>
        <p>Leather & Style partners with Stan India, a renowned leather manufacturer trusted for its unwavering commitment to quality and craftsmanship. Established for decades, Stan India has supplied beautiful, durable leather to leading brands worldwide. Their expertise spans across various industry segments, from automobiles and furniture to the coveted world of handbags and wallets. Stan India's dedication to using the finest materials and adhering to the best leather industry practices ensures their finished leathers and crafted products meet the highest global standards. This translates into timeless pieces built to last, a promise Leather & Style proudly brings to you.</p>
      </div>
      </div>
     
    </div>
  );
}
