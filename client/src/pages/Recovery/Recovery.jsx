import React  ,{useRef} from 'react';
import './Recovery.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import ContactUs from '../../components/ContactUs/ContactUs';

const Recovery = () => {
    const contactUsRef = useRef(null);
  const navigate= useNavigate();
  const navigateTo=(path)=>{
    navigate(path);
  }
  return (
    <div className='recovery container'>
        <Navbar contactUsRef={contactUsRef}/>
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
                Remember your password? <span><button className='recovery-button' onClick={()=>navigateTo('/login')}>Back to login</button></span>
            </div>

        </div>
        <div ref={contactUsRef}>
        <ContactUs />
      </div>
    </div>
  )
}

export default Recovery;
