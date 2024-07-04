import React from 'react'
import logo from '../../assets/logos/newlogonobgw.png';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className='main-page'>
        <div>
            <div className='navbar'>
                <div className='logo-name-group'>
                    <img src={logo} alt="log"  className='logo'/>
                    <span className="site-title">Leather and Style</span>
                    <span className="sub-heading">Get Ready to Be Leathered Up: Arriving Soon!</span>
                </div>
            </div>
            {/* <div className='bg'>
                <img src={bg} alt="img" className='bg-image' />
            </div> */}
        </div>
        <div className='contact-us'>

        </div>

      
    </div>
  );
}

export default ComingSoon
