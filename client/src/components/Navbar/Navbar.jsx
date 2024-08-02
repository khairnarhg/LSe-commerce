import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logos/newlogonobgw.png';
import profile from '../../assets/icons/profile.png';
import search from '../../assets/icons/search.png';
import heart from '../../assets/icons/heart.png';
import cart from '../../assets/icons/cart.png';
import Menu from '../../assets/icons/menuwhite.png';
import CloseIcon from '../../assets/icons/crosswhite.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="nav">
      <div className="upperHalf">
        <div className="mobile-menu-button">
          <button className="menu-button" onClick={toggleMenu}>
            <img src={Menu} alt="Menu" />
          </button>
        </div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`} ref={menuRef} id="menu">
          <button className="close-button" onClick={toggleMenu}>
            <img src={CloseIcon} alt="Close" />
          </button>
          <ul>
            <li><a href="#">About US</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Collection</a></li>
            <li><a href="#">Corporate Gifts</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Profile</a></li>
          </ul>
        </div>
        <div className="logo-text-group">
          <img src={logo} alt="Logo" className="logo" />
          <span className="site-title">Leather and Style</span>
        </div>
        <div className="icons-group">
          <button>
            <img src={profile} alt="Profile" className="icon" />
          </button>
          <button>
            <img src={search} alt="Search" className="icon" />
          </button>
          <button>
            <img src={heart} alt="Heart" className="icon" />
          </button>
          <button>
            <img src={cart} alt="Cart" className="icon" />
          </button>
        </div>
      </div>
      <div className="lowerHalf">
        <div className="navbar-button-group">
          <button className="navbar-button">About Us</button>
          <button className="navbar-button">Shop</button>
          <button className="navbar-button">Collections</button>
          <button className="navbar-button">Corporate Gifts</button>
          <button className="navbar-button">Contacts</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
