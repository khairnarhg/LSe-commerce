import React,{useRef, useEffect, useState} from 'react';
import './CorporateGifts.css';
import Navbar from '../../components/Navbar/Navbar';
import ContactUs from '../../components/ContactUs/ContactUs';
import Cgbg from '../../assets/bg/bg2.webp';
import axios from 'axios';
const CorporateGifts = () => {
const contactUsRef = useRef(null);

const [formData, setFormData] = useState({
  first_name: '',
  last_name: '',
  email: '',
  phno: '',
  company: '',
  country: '',
  quantities: '',
  product_name: '',
  message: ''
});

const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Validate phone number
  const validatePhone = (phone) => {
    const re = /^\d{10}$/; // Adjust regex if needed
    return re.test(phone);
  };

  // Validate form
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Check for empty required fields
    Object.keys(formData).forEach(key => {
      if (key !== 'message' && !formData[key]) {
        formErrors[key] = `${key.replace('_', ' ')} is required`;
        isValid = false;
      }
    });

    // Validate email and phone number
    if (formData.email && !validateEmail(formData.email)) {
      formErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (formData.phno && !validatePhone(formData.phno)) {
      formErrors.phno = 'Invalid phone number';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8888/.netlify/functions/corporate-gifts', formData);
        console.log(response.data);
        alert('Corporate gift request submitted successfully!');
        // Reset form fields
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phno: '',
          company: '',
          country: '',
          quantities: '',
          product_name: '',
          message: ''
        });
        // Handle successful submission
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit corporate gift request');
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phno: '',
          company: '',
          country: '',
          quantities: '',
          product_name: '',
          message: ''
        });
      }
    }
  };
  
  return (
    <div className="corporate-gifts-main-container">
      <Navbar contactUsRef={contactUsRef} />
      <div className="corporate-gifts-container">
        <div className='cg-white-blur-bg'>
          <div className="intro-image">
            <img src={Cgbg} alt="" />
          </div>
          <div className="form-area">
            <div className="form-title-cg">
              Get In Touch With Us
            </div>
            <form className='CG-Form' onSubmit={handleSubmit}>
              <div className='chote-inputs'>
                <div className="form-left">
                  <input
                    type="text"
                    name="first_name"
                    placeholder='First Name*'
                    value={formData.first_name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder='Email Address*'
                    value={formData.email}
                    onChange={handleInputChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter a valid email address"
                    required
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                  <input
                    type="text"
                    name="company"
                    placeholder='Company*'
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="quantities"
                    placeholder='Quantity(in numbers)*'
                    value={formData.quantities}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-right">
                  <input
                    type="text"
                    name="last_name"
                    placeholder='Last Name*'
                    value={formData.last_name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="phno"
                    placeholder='Phone*'
                    value={formData.phno}
                    onChange={handleInputChange}
                    pattern="\d{10}"
                    title="Phone number must be 10 digits"
                    required
                  />
                  {errors.phno && <span className="error-message">{errors.phno}</span>}
                  <input
                    type="text"
                    name="country"
                    placeholder='Country*'
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="product_name"
                    placeholder='Product*'
                    value={formData.product_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="bada-input">
                <textarea
                  name="message"
                  id="big-input"
                  placeholder='Add a message (optional)'
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type='submit' className='submit-button' >
                Send
              </button>
            </form>
            <div className="extra-info">
              <span className='extra-info1'>We will be happy to assist you with your queries, feel free to get in touch with us at 'leatherandstyle71@gmail.com'.</span>
              <span className='extra-info2'>Visit our shopping catalog to go through our products.</span>
            </div>
          </div>
        </div>
      </div>
      <div ref={contactUsRef}>
        <ContactUs />
      </div>
    </div>
  );
};

export default CorporateGifts;
