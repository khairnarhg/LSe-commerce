import React, {useEffect} from 'react';
import './Shop.css';
import CloseIcon from '../../assets/icons/crosswhite.png';

const Shop = ({ isOpen, onClose }) => {
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
          <li>Accessories</li>
          <li>Mens's Bags</li>
          <li>Women's Bags</li>
          <li>Apparels</li>
          <li>Travel Bags</li>
          <li>Giftwares</li>
          {/* Add more categories as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Shop;