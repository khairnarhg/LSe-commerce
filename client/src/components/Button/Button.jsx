import React from 'react';
import './Button.css';

const Button = ({ text, onClick, style, className }) => {
  return (
    <button
      className={`custom-button ${className}`} // Allow additional class names
      onClick={onClick}
      style={style} // Allow inline styles
    >
      {text}
    </button>
  );
};

export default Button;