import React from 'react';
import './ReviewsHome.css';

const ReviewsHome = () => {
  return (
    <div className='Reviews-Home-container'>
      <div className="heading">
        We love to hear from you...
      </div>
      <div className='reviews-space'>
        <div className="reviews-container">
            <div className="product-details">
                <div className="product-image">
                    <img src="" alt="" />
                </div>
                <div className="product-name">
                    Leather bag
                </div>
                <div className='star-rating'>

                </div>
            </div>
            <div className="review-detail">
                <div className="person-name">
                    Ramesh Shetty
                </div>
                <div className="review">
                    hello, i liked the product. the quality is really great.
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default ReviewsHome;
