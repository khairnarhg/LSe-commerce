import React, {useEffect} from 'react';
import './Shop.css';
import CloseIcon from '../../assets/icons/crosswhite.png';
import { useNavigate } from 'react-router-dom';

const Shop = ({ isOpen, onClose }) => {
  const navigate= useNavigate();
    const navigateTo=(path)=>{
        navigate(path);
    }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.shop-content') === null) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={`shop ${isOpen ? 'open' : ''}`}>
      <div className="shop-content">
        <button className="close-button" onClick={onClose}>
          <img src={CloseIcon} alt="Close" />
        </button>
        <h2>Shop Categories</h2>
        <ul>
          <li onClick={()=>navigateTo('/accessories')}>Accessories</li>
          <li onClick={()=>navigateTo('/mensbags')}>Mens's Bags</li>
          <li onClick={()=>navigateTo('/womensbags')}>Women's Bags</li>
          <li onClick={()=>navigateTo('/apparels')}>Apparels</li>
          <li onClick={()=>navigateTo('/travelbags')}>Travel Bags</li>
          <li onClick={()=>navigateTo('/giftwares')}>Giftwares</li>
          {/* Add more categories as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Shop;