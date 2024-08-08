import React from 'react';
import './BestSellers.css';

const BestSellers = () => {

    const img = [ { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722688069/laptoptan_2_t8d7or.webp" }, 
        { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722688056/handbag_3_hhhptv.webp" }, 
        { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722709006/WhatsApp_Image_2024-08-03_at_23.38.00_dauzrh.webp" }, 
        { image: "https://res.cloudinary.com/dyyocxffd/image/upload/v1722688055/sideblue_4_ivt8cg.webp" }];
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
                    <div  className='discount'>
                        30% Off
                    </div>
                    <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688069/laptoptan_2_t8d7or.webp" alt="" className='product-photo'/>
                    <div className='product-title'>
                        <div className='product-name'>Sleek Laptop Bag</div>
                        <span>₹ 2730 MRP <span className='cut-price'>₹3900</span>/-</span>
                          
                    </div>
                </button>
            </div>

        </div>
      
    </div>
  );
}

export default BestSellers;
