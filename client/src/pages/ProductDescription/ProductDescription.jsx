import React, { useState, useEffect, useRef } from 'react';
import './ProductDescription.css';
import Navbar from '../../components/Navbar/Navbar';
import ContactUs from '../../components/ContactUs/ContactUs';
import { useLocation, useParams } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

const ProductDescription = () => {
  const contactUsRef = useRef(null);
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const { id } = useParams();
  const location = useLocation();
  const category = location.state?.category;
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);


  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const handleBuyNowClick = () => {
    window.scrollTo({ top: 0});

    navigate('/buynow', {
      state: {
        productName: product.pname,
        productId: id
      }
    }); 
  };
  const fetchProduct = async () => {
    try {
      console.log("Category:", category);
      console.log("Product ID:", id);
      const response = await fetch('/data1.json');
      const data = await response.json();
      console.log("Fetched Data:", data);
      const productData = data.Category[category][id];
      if (productData) {
        setProduct(productData);
      } else {
        setError('Product not found');
      }
      setLoading(false);
    } catch (err) {
      console.error("Fetch Error:", err);
      setError('Failed to fetch product details');
      setLoading(false);
    }
  };

  useEffect(() => {


    if (id && category) {
      fetchProduct();
    }
  }, [id, category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % product.Image.main.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + product.Image.main.length) % product.Image.main.length);
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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.2, 3)); // Maximum zoom level is 3
  };
  
  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.2, 1)); // Minimum zoom level is 1
  };

  return (
    <div className='pd-container'>
      <Navbar contactUsRef={contactUsRef}/>
      <div className="pd-main-container">
        <div className="product-header">
          {product.pname}
        </div>
        <div className="pd-carousel-area">
          <div className="carousel-wrapper2">
            <button className='carousel-button prev' onClick={prevSlide}>&#10094;</button>
            <div
              className='carousel-slide2'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {product.Image.main.map((image, index) => (
                <div key={index} className='carousel-item2' onClick={openModal}>
                  <img src={image} alt={`Product View ${index + 1}`} className='product-photo2' />
                </div>
              ))}
            </div>
            <button className='carousel-button next' onClick={nextSlide}>&#10095;</button>
          </div>
        </div>
        {/* Modal for Zoomed Images */}
      {showModal && (
        
        <div className="modal-overlay" >
          <button className="close-button" onClick={closeModal}>&times;</button>
          {/* <div className="zoom-controls">
            <button className="zoom-button" onClick={handleZoomIn}>Zoom In</button>
            <button className="zoom-button" onClick={handleZoomOut}>Zoom Out</button>
          </div> */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <div className="carousel-wrapper-modal">
              <button className='carousel-button1 prev' onClick={prevSlide}>&#10094;</button>
              <div
                className='carousel-slide-modal'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {product.Image.main.map((image, index) => (
                  <div key={index} className='carousel-item-modal'>
                    <img
                      src={image}
                      alt={`Product View ${index + 1}`}
                      className='product-photo-modal'
                      style={{
                        transform: `scale(${zoomLevel}) translate(${(1 - zoomLevel) * 50}%, ${(1 - zoomLevel) * 50}%)`,
                      }} // Keep the image centered during zoom
                    />
                  </div>
                ))}
              </div>
              <button className='carousel-button1 next' onClick={nextSlide}>&#10095;</button>
            </div>
          </div>
        </div>
      )}
        <div className='product-name-cost'>
          <div className='product-name1'>{product.pname}</div>
          <span className='prices1'>{product.Discount_p} MRP <span className='cut-price'>{product.Price}</span></span>
          <div className='instr-pd'>*Inclusive of all taxes</div>
        </div>
        <div className="pd-description">
          <div className='d-header'>Product Description: </div>
          {product.Description}
        </div>
        <div className="pd-dimension">
          <div className='d-header'>Dimensions:</div>
          [lxbxh]
          <div></div>
            {product.Dimension} inch
        </div>
        <div className="pd-care-info">
        <div className='d-header'>Care Instructions:</div>
            <div></div>1. Clean Regularly: Dust with a soft cloth and spot clean with a damp cloth. Use leather cleaner for tough stains.
            <div></div>2. Condition Periodically: Apply leather conditioner every 6-12 months to keep it supple.
            <div></div>3. Protect from Water: Pat dry if wet, and consider using a waterproofing spray.
            <div></div>4. Store Properly: Store in a cool, dry place; use dust bags and avoid folding.
            <div></div>5. Handle with Care: Clean hands before handling.
        </div>
        <div >
          <button className="buy-now-button" onClick={handleBuyNowClick}>Buy Now</button>
        </div>
        <div className='pd-Return-Policy'>
      <div className='d-header' onClick={toggleContent}>
        <div>Return Policy</div>
        <div className='plus-icon'>
          {isOpen ? '-' : '+'}
        </div>
      </div>
      {isOpen && (
        <>
          <div className='rp-des'>
            At Leather and Style, we want you to be completely satisfied with your purchase. If you are not
            satisfied with your product, you may return it within 14 days of the delivery date.
          </div>
          <a href="https://drive.google.com/file/d/1eNZD3bZXwyAqxqMazEKv_PZ62WHE7rYM/view?usp=sharing" className='link-rp'>
            More info
          </a>
        </>
      )}
    </div>
    </div>
    <div ref={contactUsRef}>
        <ContactUs />
      </div>
    </div>
  );
};

export default ProductDescription;



