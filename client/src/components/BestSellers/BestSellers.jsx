import React, {useEffect, useRef, useState} from 'react';
import './BestSellers.css';

const BestSellers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);


        const products = [ { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722688069/laptoptan_2_t8d7or.webp", name: 'Sleek Laptop Bag', a_price: '3900', d_price: '2730' }, 
        { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722688056/handbag_3_hhhptv.webp", name: 'Oliva' , a_price: '2250', d_price: '1575' }, 
        { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722688054/SL105_atas6i.webp", name: 'Square Ladies Laptop Bag' , a_price: '5580', d_price: '3906' }, 
        { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722709006/WhatsApp_Image_2024-08-03_at_23.38.00_dauzrh.webp", name: 'Sling With Chain' , a_price: '2625', d_price: '1838'  },
        { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722688055/sideblue_4_ivt8cg.webp", name: 'Cross Body Sling' , a_price: '2550', d_price: '1785' }];

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
    <div className='main-area'>
        <div className='title-group'>
            <div className="line11"></div>
            <div className="title">Best Sellers</div>
            <div className="line22"></div>
        </div>
        <div className='blur-bg' >
        <div className='discount'>*30% off on all products</div>
        <div className='instr'>Swipe to see the products</div>
            <div className='carousel-container-1'>
            {/* <button className='carousel-button prev' onClick={prevSlide}>&#10094;</button> */}
            <div className="carousel-wrapper1">
            <div
          className='carousel-slide'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {products.map((product, index) => (
            <div key={index} className='carousel-item'>
              
              <img src={product.image} alt={product.name} className='product-photo' />
              <div className='product-title'>
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
  );
}

export default BestSellers;
