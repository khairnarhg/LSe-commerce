import React from 'react';
import './corporate.css';
import bg2 from '../../assets/bg/bg2.png';
import bg1 from '../../assets/bg/bg1.png';
const ContactForm = () => {
    return (
        <div className="contact-form-container">
         <img src={bg1} alt="img" id='image'/> 
        <img src={bg2}alt="" className="hero-image" />
        <div className="section">
        <h1>Get In Touch With Us</h1>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="First Name *" />
            <input type="text" placeholder="Last Name *" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address *" />
            <input type="tel" placeholder="Phone *" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="Country *" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Quantities *" />
            <input type="text" placeholder="Product *" />
          </div>
          <div className="form-group">
            <textarea placeholder="Add a message (Optional)"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        <p>
          We will be happy to assist you with your queries. Feel free to get in touch with us at leatherandstyle72@gmail.com.</p>
          <p>Visit the shopping catalog to go through our products.</p>
          
          </div>
      </div>
    );
  };
  
  export default ContactForm;
