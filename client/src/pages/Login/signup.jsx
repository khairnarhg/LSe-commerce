import React from 'react'
import './signup.css'
import bg1 from '../../assets/bg/bg1.png';
const loginsignup = () => {
  return (
    <div className='loginsignup'>
       <img src={bg1} alt="img" id='image'/>   
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
          <input type="dob" placeholder='Date of Birth'/>
          <input type="number" placeholder='Mobile Number'/>
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p >By continuing, I agree to terms of use & privacy policy</p>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
        
      </div>
    </div>
  )
}

export default loginsignup;
