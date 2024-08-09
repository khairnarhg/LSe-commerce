// ContactUs.jsx
import React from 'react';
import './ContactUs.css';
import insta from '../../assets/logos/instagramw.png';
import Gmap from '../../assets/Images/gmap.png';

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
          <div className='contact-details-content'>*Click on the map to get the directions</div>
        </div>
        <div className="gmap-direction">
          
          <a href="https://www.google.com/maps/place/Leather+%26+Style/@19.2227551,72.9670997,15z/data=!4m6!3m5!1s0x3be7b90c6688c3b5:0x9f06069e85e8fae9!8m2!3d19.2227551!4d72.9670997!16s%2Fg%2F11vcvdk_z0?entry=ttu">
          <img src={Gmap} alt="" />
          </a>
          
        </div>
        <div className="contact-links">
          <div className='papers-heading'>Info</div>
          {/* <a href="#">FAQ</a> */}
          <a href="https://drive.google.com/file/d/1eNZD3bZXwyAqxqMazEKv_PZ62WHE7rYM/view?usp=sharing">Return Policy</a>
          <a href="https://drive.google.com/file/d/1ql8rMd4egwPmEc_mkY6wC0Ws-SrlvPMm/view?usp=sharing">Privacy Policy</a>
          <a href="https://drive.google.com/file/d/1tPS5tFAn9n7vcrUVnoTAjoWcrofvxAnG/view?usp=sharing">Terms and Conditions</a>
        </div>
        {/* <div className="newsletter-signup">
        <a href="https://www.instagram.com/leatherandstyle.thane/" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="" className='insta-icon'/>
        </a>

          <h2 classname='head'>Newsletter</h2>
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

