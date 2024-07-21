import React from 'react';
import './Recovery.css';
import Navbar from '../../components/Navbar/Navbar';
import ContactUs from '../../components/ContactUs/ContactUs';

const Recovery = () => {
  return (
    <div className='recovery container'>
        <Navbar/>
        <div className="recovery-main-container">
            <div className='recovery-header'>
                Recover Password
            </div>
            <div className='instructions'>
                Please enter your e-mail
            </div>
            <form action="" className='recovery-form'>
                <input type="email" placeholder='Email Id' className='recovery-email-input'/>
                
                <button className='recover-submit-button'>
                    Recover
                </button>
            </form>
            <div className='recover-instructions1'>
                Remember your password? <span><button className='recovery-button'>Back to login</button></span>
            </div>

        </div>
        <ContactUs/>
    </div>
  )
}

export default Recovery;
