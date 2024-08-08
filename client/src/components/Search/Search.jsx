import React, { useEffect } from 'react';
import './Search.css';
import CloseIcon from '../../assets/icons/crosswhite.png';

const SearchMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.search-content') === null) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={`search-menu ${isOpen ? 'open' : ''}`}>
      <div className="search-content">
        <button className="close-button" onClick={onClose}>
          <img src={CloseIcon} alt="Close" />
        </button>
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for products..."
          />
        </div>
        <div className="collection-names">
          <h3>Collections</h3>
          <ul>
            <li>Accessores</li>
            <li>Men's Bags</li>
            <li>Women's Bags</li>
            <li>Apparels</li>
            <li>Travel Bags</li>
            <li>Giftwares</li>
            {/* Add more collections as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchMenu;

