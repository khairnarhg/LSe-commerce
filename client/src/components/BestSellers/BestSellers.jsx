import React from 'react';
import './BestSellers.css';

const BestSellers = () => {
  return (
    <div className='main-area'>
        <div className='title-group'>
            <div className="line11"></div>
            <div className="title">Best Sellers</div>
            <div className="line22"></div>
        </div>
        <div className='blur-bg' >
            <div className='products'>
                <button className='image-title-group'>
                    <img src="" alt="" className='product-photo'/>
                    <div className='product-title'> Product Name</div>
                </button>
            </div>

        </div>
      
    </div>
  );
}

export default BestSellers;
