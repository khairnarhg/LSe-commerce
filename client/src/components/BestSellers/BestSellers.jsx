import React, {useEffect, useRef, useState} from 'react';
import './BestSellers.css';
import { useNavigate } from 'react-router-dom';

const BestSellers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const [isLaptopScreen, setIsLaptopScreen] = useState(window.innerWidth >= 768);

    const navigate = useNavigate();

    const products = [ { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722688069/laptoptan_2_t8d7or.webp", name: 'Sleek Laptop Bag', a_price: '3900', d_price: '2730', id:'SL111', cat:"Men's Bag" }, 
      { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722688056/handbag_3_hhhptv.webp", name: 'Oliva' , a_price: '2250', d_price: '1575', id:'SL141', cat:"Women's Bag"}, 
      { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722688054/SL105_atas6i.webp", name: 'Square Ladies Laptop Bag' , a_price: '5580', d_price: '3906' , id:'SL163', cat:"Women's Bag"}, 
      { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722709006/WhatsApp_Image_2024-08-03_at_23.38.00_dauzrh.webp", name: 'Sling With Chain' , a_price: '2625', d_price: '1838', id:'SL140', cat:"Women's Bag"  },
      { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722688055/sideblue_4_ivt8cg.webp", name: 'Cross Body Sling' , a_price: '2550', d_price: '1785', id:'SL162', cat:"Women's Bag" }];
    const itemsPerView = isLaptopScreen ? 3 : 1;

    const handleProductClick = (productId) => {
      const selectedProduct = products.find(product => product.id === productId);
      if (selectedProduct) {
          navigate(`/products/${productId}`, {
              state: { category: selectedProduct.cat }
          });
      } else {
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
    <div className='main-area'>
        <div className='title-group'>
            <div className="line11"></div>
            <div className="title">Best Sellers</div>
            <div className="line22"></div>
        </div>
        <div className='blur-bg' >
        <div className='discount'>*<span className='b-disc'>30%</span> off on all products</div>
        {/* <div className='instr'>Swipe to see the products</div> */}
        {currentIndex > 0 && (
                    <button className='carousel-button-prev' onClick={prevSlide}>&#10094;</button>
                )}
            <div className='carousel-container-1'>
            
            <div className="carousel-wrapper1">
            <div
          className='carousel-slide'
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
        }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {products.map((product, index) => (
            <div key={index} className='carousel-item' onClick={() => handleProductClick(`${product.id}`)}>
              
              <img src={product.image} alt={product.name} className='product-photo' />
              <div className='product-title1'>
                <div className='product-name' >{product.name}</div>
    
                <div>₹ {product.d_price} MRP <span className='cut-price'>₹{product.a_price}</span>/-</div>
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
  );
}

export default BestSellers;
