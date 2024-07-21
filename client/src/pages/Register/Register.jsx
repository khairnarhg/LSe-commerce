import React from 'react';
import './Register.css';
import Navbar from '../../components/Navbar/Navbar';
import ContactUs from '../../components/ContactUs/ContactUs';

const Register = () => {
  return (
    <div className='register-container'>
      <Navbar/>
      <div className="register-main-container">
        <div className='register-header'>
          Register
        </div>
        <div className='instructions'>
          Please fill the below information
        </div>
        <form action="" className='register-form'>
          <input type="text" placeholder='First Name' className='register-firstname-input'/>
          <input type="text" placeholder='Last Name' className='register-lastname-input'/>
          <input type="email" placeholder='Email Id' className='register-email-input'/>
          <input type="text" placeholder='Password' className='register-pass-input'/>
          <input type="text" placeholder='Phone Number' className='register-phno-input'/>
          <div className='register-instructions'>
            <div className="register-instruction1">
              By clicking Register, you agree to our <span><button className='register-ins'>Terms of Service</button></span> and that you have read our <span><button className='register-ins'>Privacy Policy</button></span>.
            </div>
            <div className="register-instruction2">
            * I hereby authorize to send notifications on SMS/ Messages/Promotional /informational messages.
            </div>
          </div>
          <button className='Register-submit-button'>
            Register
          </button>
        </form>

      </div>
      <ContactUs/>

        
      
    </div>
  )
}

export default Register;
