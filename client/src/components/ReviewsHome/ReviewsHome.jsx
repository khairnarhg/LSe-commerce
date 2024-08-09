import React, { useRef, useState } from 'react';
import './ReviewsHome.css';
import Fullstar from '../../assets/Images/5star.png';


const ReviewsHome = () => {



  return (
    <div className='Reviews-Home-container'>
      <div className="heading">
        We love to hear from you...
      </div>
      <div
        className='reviews-space'
      >
        <div className="reviews-container">
          <div className="rp-1">
          <div className="review-detail">
            <div className="person-name">Dr. Chhaya Pawar</div>
            <div className="star-rating">
              <img src={Fullstar} alt="" />
            </div>
            <div className="review">Good quality products at affordable prices.</div>
          </div>
          <div className="review-detail">
            <div className="person-name">Mr. Vilas Hadawale</div>
            <div className="star-rating">
              <img src={Fullstar} alt="" />
            </div>
            <div className="review">High quality leather products, excellent for travel and business with practical design.</div>
          </div>
          </div>
          <div className="rp-2">
          <div className="review-detail">
            <div className="person-name">Mrs. Shweta Tawde</div>
            <div className="star-rating">
              <img src={Fullstar} alt="" />
            </div>
            <div className="review">Trendy and stylish designs for leather purses and accessories.</div>
          </div>
          <div className="review-detail">
            <div className="person-name">Mrs. Shraddha Kadam</div>
            <div className="star-rating">
              <img src={Fullstar} alt="" />
            </div>
            <div className="review">Awesome collection of good quality premium Travel bags and laptop bags.</div>
          </div>
          </div>
          <div className="rp-3">
          <div className="review-detail">
            <div className="person-name">Mr. Shailendra Ghatge</div>
            <div className="star-rating">
              <img src={Fullstar} alt="" />
            </div>
            <div className="review">Stylish collection of leather jackets, looks elegant and high quality.</div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ReviewsHome;

