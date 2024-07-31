// ContactUs.jsx
import React from 'react';
import './ContactUs.css';
import insta from '../../assets/logos/instagramw.png';

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        Contact Us
      </div>
      
      <div className="contact-info">
        <div className="contact-details">
          <div className='contact-details-content'>Email: leatherandstyle71@gmail.com</div>
          <div className='contact-details-content'>Mob: 9967 29 63 85 / 9987 89 89 88</div>
          <div className='contact-details-content'>Address: Shop No. 69, Amrapali Shopping Arcade, Opp. Jasmine Tower, Near Vasant Vihar School, Vasant Vihar, Thane West, Pin 400610</div>
        </div>
        {/* <div className="contact-links">
          <div className='papers-heading'>Info</div>
          <a href="#">FAQ</a>
          <a href="#">Return Policy</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>
        <div className="newsletter-signup"> */}
        <a href="https://www.instagram.com/leatherandstyle.thane/" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="" className='insta-icon'/>
        </a>

          {/* <h2 classname='head'>Newsletter</h2>
          <p>Subscribe to stay updated about new products, promotional offers and more.</p>
          <form className='newsletter-form'>
            <input type="email" placeholder="Enter Your Email Id" className='email-input'/>
            <button type="submit" className='email-submit'>Subscribe</button>
          </form>
        </div> */}
      </div>
      <footer className="contact-footer">
        <p className='copyright'>Copyright&copy; 2024</p>
        <p>Leather and Style</p>
      </footer>
    </div>
  );
}

export default ContactUs;

