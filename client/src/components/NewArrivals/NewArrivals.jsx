import React, {useEffect, useRef, useState} from 'react';
import './NewArrivals.css';
import { useNavigate } from 'react-router-dom';
const NewArrivals = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const navigate = useNavigate();
    const [isLaptopScreen, setIsLaptopScreen] = useState(window.innerWidth >= 768);
    const itemsPerView = isLaptopScreen ? 3 : 1;


    const products = [ { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722688072/purse_3_red_dgxvlm.webp", name: 'Bucket Bag', a_price: '5505', d_price: '3854', id:'SL186', cat:"Women's Bag" }, 
        { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722688071/purse_blue3_akhujd.webp", name: 'Eco Shiny Tote' , a_price: '2640', d_price: '1848' , id:'SL164', cat:"Women's Bag"}, 
        { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722709042/WhatsApp_Image_2024-08-03_at_23.38.03_srgdet.webp", name: 'Yoshi 2' , a_price: '3480', d_price: '2436', id:'SL165', cat:"Women's Bag" }, ];

        const handleProductClick = (productId) => {
          // Find the product with the given productId
          const selectedProduct = products.find(product => product.id === productId);
        
          // Check if the product exists
          if (selectedProduct) {
            // Navigate to the product page with the category of the selected product
            navigate(`/products/${productId}`, {
              state: { category: selectedProduct.cat }
            });
          } else {
            // Handle the case where the productId is not found (optional)
            console.error('Product not found');
          }
        };



        const nextSlide = () => {
          // Limit the next slide based on how many items can be visible in the current screen size
          setCurrentIndex((prevIndex) => 
              Math.min(prevIndex + 1, products.length - itemsPerView)
          );
      };
    
      const prevSlide = () => {
          // Make sure we don’t scroll to a negative index
          setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
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
    
      useEffect(() => {
          const handleResize = () => {
              setIsLaptopScreen(window.innerWidth >= 768);
          };
          window.addEventListener('resize', handleResize);
    
          return () => {
              window.removeEventListener('resize', handleResize);
          };
      }, []);
  return (
    <div className='main-area1'>
        <div className='title-group'>
            <div className="line11"></div>
            <div className="title">New Arrivals</div>
            <div className="line22"></div>
        </div>
        <div className='blur-bg' >
        <div className='discount'>*<span className='b-disc'>30%</span> off on all products</div>
        {/* <div className='instr'>Swipe to see the products</div> */}
        {currentIndex > 0 && (
                    <button className='carousel-button-prev' onClick={prevSlide}>&#10094;</button>
                )}
            <div className='carousel-container-2'>
            {/* <button className='carousel-button prev' onClick={prevSlide}>&#10094;</button> */}
            <div className="carousel-wrapper2">
            <div
          className='carousel-slide1'
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
        }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {products.map((product, index) => (
            <div key={index} className='carousel-item' onClick={() => handleProductClick(`${product.id}`)}>
              
              <img src={product.image} alt={product.name} className='product-photo1' onClick={() => handleProductClick(`${product.id}`)}/>
              <div className='product-title1'>
                <div className='product-name'>{product.name}</div>
                <span>₹ {product.d_price} MRP <span className='cut-price'>₹{product.a_price}</span>/-</span>
              </div>
            </div>
          ))}
        </div>
        </div>    
        </div>
        {currentIndex < products.length - itemsPerView && (
                    <button className='carousel-button-next' onClick={nextSlide}>&#10095;</button>
                )}

        </div>
      
    </div>
  )
}

export default NewArrivals;
