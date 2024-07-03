import React from 'react'
//import {Link} from 'react-router-dom';
//import Button from '../Button/Button';
import './NavigationBar.css';
import logo from '../../assets/logos/newlogonobgw.png';
import profile from '../../assets/icons/profile.png';
import search from '../../assets/icons/search.png';
import heart from '../../assets/icons/heart.png';
import cart from '../../assets/icons/cart.png';


const NavigationBar = () => {
  return (
  
        
        <nav>
            <div className='upperHalf'>
                <div className="logo-text-group">
                    <img src={logo} alt="Logo" className="logo" />
                    <span className="site-title">Leather and Style</span>
                </div>
                <div className="icons-group">
                    <button className='icons-button'>
                        <img src={profile} alt="profile" className='icon' />
                    </button >
                    <button className='icons-button'>
                        <img src={search} alt="search" className='icon'/>
                    </button >
                    <button className='icons-button'>
                        <img src={heart} alt="heart" className='icon'/>
                    </button>
                    <button className='icons-button'>
                        <img src={cart} alt="cart" className='icon'/>
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

export default NavigationBar