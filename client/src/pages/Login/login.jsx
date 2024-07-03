import React from 'react'
import './login.css'
import bg1 from '../../assets/bg/bg1.png';
const login = () => {
  return (
    
    <div className='login'>
   
      <img src={bg1} alt="img" id='image'/>    
      <div className='login-container'>
     
        <h1>Login</h1>
        <div className="login-fields">
        
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
       
        <button>Login</button>
        <p className='login-login'>Don't have an account? <span>Create One</span></p>
        <p className='login-login'> <span>Forgot Password?</span></p>
      </div>
    </div>
  )
}

export default login;
