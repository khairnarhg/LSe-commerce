import React from 'react'
import './recover.css'
import bg1 from '../../assets/bg/bg1.png';
const recover = () => {
  return (
    <div className='recover'>
       <img src={bg1} alt="img" id='image'/>    

      <div className='recover-container'>
      
        <h1>Recover Password</h1>
        <h4>Please enter your e-mail</h4>
        <div className="recover-fields">
       
          <input type="email" placeholder='Email Address'/>
          
        </div>
       
        <button>Recover</button>
        <p className='recover-recover'>Remember your password? <span>Back to login</span></p>
        
      </div>
    </div>
  )
}

export default recover;
