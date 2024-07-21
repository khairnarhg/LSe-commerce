import React from 'react';
import './Login.css';
import Navbar from '../../components/Navbar/Navbar';
import ContactUs from '../../components/ContactUs/ContactUs';
import Google from '../../assets/logos/google.png';

const Login = () => {
  return (
    <div className='login-container'>
      <Navbar/>
      <div className='login-main-container'>
        <div className='login-header'>
          Login
        </div>
        <div className='google-icon'>
          <button className='google-icon-button'>
          <img src={Google} alt="" />
          </button>
        </div>
        <div className='recovery-instructions'>
          Please enter your e-mail and password
        </div>
        <form action="" className='login-form'>
          <input type="email" placeholder='Email Id' className='login-email-input'/>
          <input type="text" placeholder='Password' className='pass-input'/>
          <button className='login-submit-button'>
            Login 
          </button>
        </form>
        <div className='recovery-instructions2'>
          Forgot your password? <span><button className='recover-button'>Recover it</button></span>
        </div>
        <div className='recovery-instructions1'>
          Don't have an account? <span><button className='create-button'>Create one</button></span>
        </div>
      </div>
      <ContactUs/>
    </div>
  )
}

export default Login;
