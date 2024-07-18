import React from 'react'
import './Navbar.css';
import logo from '../../assets/logos/newlogonobgw.png';
import profile from '../../assets/icons/profile.png';
import search from '../../assets/icons/search.png';
import heart from '../../assets/icons/heart.png';
import cart from '../../assets/icons/cart.png';


const Navbar = () => {
  return (
        <nav >
            <div className='upperHalf'>
                <div className="logo-text-group">
                    <img src={logo} alt="Logo" className="logo" />
                    <span className="site-title">Leather and Style</span>
                </div>
                <div className="icons-group">
                    <button>
                        <img src={profile} alt=""  className='icon'/>
                    </button>
                    <button>
                        <img src={search} alt="" className='icon'/>
                    </button>
                    <button>
                        <img src={heart} alt="" className='icon'/>
                    </button>
                    <button>
                        <img src={cart} alt="" className='icon'/>
                    </button>
                </div>
            </div>
            <div className='lowerHalf'>
                <div className='navbar-button-group'>
                    <button className='navbar-button'>
                        About Us
                    </button>
                    <button className='navbar-button'>
                        Shop
                    </button>
                    <button className='navbar-button'>
                        Collections
                    </button>
                    <button className='navbar-button'>
                        Corporate Gifts
                    </button>
                    <button className='navbar-button'>
                        Contacts
                    </button>
                </div> 
            </div>
        </nav>
  );
}

export default Navbar;