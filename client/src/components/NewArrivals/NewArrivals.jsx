import React, {useEffect, useRef, useState} from 'react';
import './NewArrivals.css';
const NewArrivals = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);


    const products = [ { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722688072/purse_3_red_dgxvlm.webp", name: 'Bucket Bag', a_price: '5505', d_price: '3854' }, 
        { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722688071/purse_blue3_akhujd.webp", name: 'Eco Shiny Tote' , a_price: '2640', d_price: '1848' }, 
        { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722709042/WhatsApp_Image_2024-08-03_at_23.38.03_srgdet.webp", name: 'Yoshi 2' , a_price: '3480', d_price: '2436' }, ];



    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
      };
    
      const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
      };
    
      const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const difference = touchStartX.current - touchEndX;
    
        if (difference > 50) {
          nextSlide();
        } else if (difference < -50) {
          prevSlide();
        }
      };
  return (
    <div className='main-area1'>
        <div className='title-group'>
            <div className="line11"></div>
            <div className="title">New Arrivals</div>
            <div className="line22"></div>
        </div>
        <div className='blur-bg' >
        <div className='discount'>*30% off on all products</div>
        <div className='instr'>Swipe to see the products</div>
            <div className='carousel-container-2'>
            {/* <button className='carousel-button prev' onClick={prevSlide}>&#10094;</button> */}
            <div className="carousel-wrapper2">
            <div
          className='carousel-slide1'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {products.map((product, index) => (
            <div key={index} className='carousel-item'>
              
              <img src={product.image} alt={product.name} className='product-photo1' />
              <div className='product-title1'>
                <div className='product-name'>{product.name}</div>
                <span>₹ {product.d_price} MRP <span className='cut-price'>₹{product.a_price}</span>/-</span>
              </div>
            </div>
          ))}
        </div>
        </div>    
        </div>

        </div>
      
    </div>
  )
}

export default NewArrivals
