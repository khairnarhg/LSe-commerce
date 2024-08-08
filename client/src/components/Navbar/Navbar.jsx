import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { useAuth } from '../../utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logos/newlogonobgw.png';
import profile from '../../assets/icons/profile.png';
import search from '../../assets/icons/search.png';
import heart from '../../assets/icons/heart.png';
import cart from '../../assets/icons/cart.png';
import Menu from '../../assets/icons/menuwhite.png';
import CloseIcon from '../../assets/icons/crosswhite.png';
import Shop from '../Shop/Shop';
import SearchMenu from '../Search/Search';



const Navbar = ({ contactUsRef }) => {
  // const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuRef = useRef(null);

  // const handleProfileClick = () => {
  //   if (isAuthenticated) {
  //     navigate('/profile');
  //   } else {
  //     navigate('/login');
  //   }
  // };

  const toggleShop = () => {
    setIsShopOpen(!isShopOpen);
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const closeShop = () => {
    setIsShopOpen(false);
  };

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

  const navigateTo = (path) => {
    if (path === 'contact') {
      scrollToContactUs();
    } else {
      navigate(path);
    }
  };

  const scrollToContactUs = () => {
    if (contactUsRef.current) {
      contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <li><a href="#" onClick={() => navigateTo('/aboutus')}>About US</a></li>
            <li><a href="#" onClick={toggleShop}>Shop</a></li>
            {/* <li><a href="#" onClick={() => navigateTo('/collections')}>Collection</a></li> */}
            <li><a href="#" onClick={() => navigateTo('/corporategifts')}>Corporate Gifts</a></li>
            <li><a href="#" onClick={() => navigateTo('contact')}>Contact Us</a></li>
            {/* <li><a href="#" onClick={() => navigateTo('/wishlist')}>Wishlist</a></li>
            <li><a href="#" onClick={() => navigateTo('/cart')}>Cart</a></li> */}
            {/* <li><a href="#" onClick={() => navigateTo('/login')}>Profile</a></li> */}
          </ul>
        </div>
        <div className="logo-text-group" onClick={() => navigateTo('/')}>
          <img src={logo} alt="Logo" className="logo" />
          <span className="site-title">Leather and Style</span>
        </div>
        <div className="icons-group">
          <button onClick={()=> navigateTo('/login')}>
            <img src={profile} alt="Profile" className="icon" />
          </button>
          <button onClick={toggleSearch}>
            <img src={search} alt="Search" className="icon" />
          </button>
          {/* <button onClick={() => navigateTo('/wishlist')}>
            <img src={heart} alt="Heart" className="icon" />
          </button>
          <button onClick={() => navigateTo('/cart')}>
            <img src={cart} alt="Cart" className="icon" />
          </button> */}
        </div>
      </div>
      <div className="lowerHalf">
        <div className="navbar-button-group">
          <button className="navbar-button" onClick={() => navigateTo('/aboutus')}>About Us</button>
          <button className="navbar-button" onClick={toggleShop}>Shop</button>
          {/* <button className="navbar-button" onClick={() => navigateTo('/collections')}>Collections</button> */}
          <button className="navbar-button" onClick={() => navigateTo('/corporategifts')}>Corporate Gifts</button>
          <button className="navbar-button" onClick={scrollToContactUs}>Contacts</button>
        </div>
      </div>
      <Shop isOpen={isShopOpen} onClose={closeShop} />
      <SearchMenu isOpen={isSearchOpen} onClose={closeSearch} />
    </div>
  );
};

export default Navbar;

