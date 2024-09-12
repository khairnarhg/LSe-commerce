import React,{useRef} from 'react';
import './WomensBags.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar.jsx';
import ContactUs from '../../../components/ContactUs/ContactUs.jsx';
import WMimg from '../../../assets/Images/womensbagscat.webp';

const WomensBags = () => {
  const contactUsRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`, {
      state: { category: "Women's Bag" }
    });
  };
  return (
    <div className='wm-container'>
      <Navbar contactUsRef={contactUsRef}/>
      <div className="wm-main-container">
      <div className="a-header">
        WOMEN'S BAGS
      </div>
      <div className='image-area'>
        <img src={WMimg} alt="" />
      </div>
      <div className="tagline">
      "Timeless Elegance, Crafted for the Modern Woman."
      </div>
      <div className="Discount-line">
        *<span className='b-disc'>30%</span> Discount on all the products
      </div>
      <div className="product-area">
        <div className="a-div1">
          <div className='product' onClick={() => handleProductClick('SL108')}>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688072/purse_blue_1_pzqbdc.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Handle Bag</div>
                  'Flat 30% OFF'
                  <div className='prices'>₹ 3045 MRP <span className='cut-price'>₹ 4350</span>/-</div>
            </div>
          </div>
          <div className='product' onClick={() => handleProductClick('SL186')}>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688072/purse_3_red_dgxvlm.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Bucket Bag</div>
                  'Flat 30% OFF'
                  <div className='prices'>₹ 3854 MRP <span className='cut-price'>₹ 5505</span>/-</div>
            </div>
          </div>
        </div>
        <div className="a-div1">
        <div className='product' onClick={() => handleProductClick('SL164')}>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688071/purse_blue3_akhujd.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Eco Shiny Tote</div>
                  'Flat 30% OFF'
                  <div className='prices'>₹ 1848 MRP <span className='cut-price'>₹ 2640</span>/-</div>
            </div>
          </div>
          <div className='product' onClick={() => handleProductClick('SL177')}> 
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688071/womenpurse4_p7sba8.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Big Armani Bag</div>
                  'Flat 30% OFF'
                  <div className='prices'>₹ 3308  MRP <span className='cut-price'>₹ 4725</span>/-</div>
            </div>
          </div>
        </div>
        <div className="a-div1">
          <div className='product' onClick={() => handleProductClick('SL147')}>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688055/purse_uwzh3s.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Women's Clutch</div>
                    'Flat 30% OFF'
                    <div className='prices'>₹ 1628 MRP <span className='cut-price'>₹ 2325</span>/-</div>
              </div>
          </div>
          <div className='product'onClick={() => handleProductClick('SL101')}>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688059/sidebag_browm_8_fcjirx.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Side Bag</div>
                    'Flat 30% OFF'
                    <div className='prices'>₹ 1685 MRP <span className='cut-price'>₹ 2450</span>/-</div>
              </div>
          </div>
        </div>
        <div className="a-div1">
          <div className='product'onClick={() => handleProductClick('SL162')}>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688055/sideblue_4_ivt8cg.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Cross Body Sling</div>
                    'Flat 30% OFF'
                    <div className='prices'>₹ 1785 MRP <span className='cut-price'>₹ 2550</span>/-</div>
              </div>
          </div>
          <div className='product'onClick={() => handleProductClick('SL105')}>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1723200957/IMG_5939_dok3yn.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Triangle Sling Bag</div>
                    'Flat 30% OFF'
                    <div className='prices'>₹ 2153 MRP <span className='cut-price'>₹ 3075</span>/-</div>
              </div>
          </div>
        </div>
        <div className="a-div1">
          <div className='product'onClick={() => handleProductClick('SL163')}>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688054/SL105_atas6i.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Square Ladies Laptop Bag</div>
                    'Flat 30% OFF'
                    <div className='prices'>₹ 3906 MRP <span className='cut-price'>₹ 5580</span>/-</div>
              </div>
          </div>
          <div className='product'onClick={() => handleProductClick('SL184')}>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688054/SL177_3_p5h8ev.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Versatile Women's Bag</div>
                    'Flat 30% OFF'
                    <div className='prices'>₹ 3938  MRP <span className='cut-price'>₹ 5625</span>/-</div>
              </div>
          </div>
        </div>
        <div className="a-div1">
          <div className='product'onClick={() => handleProductClick('SL102')}>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722709037/WhatsApp_Image_2024-08-03_at_23.38.00_1_cxnxzj.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Baddel Habdel</div>
                    'Flat 30% OFF'
                    <div className='prices'>₹ 3969 MRP <span className='cut-price'>₹ 5670</span>/-</div>
              </div>
          </div>
          <div className='product'onClick={() => handleProductClick('SL103')}>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722709021/WhatsApp_Image_2024-08-03_at_23.37.55_1_sqdhyf.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Small Armani Bag</div>
                    'Flat 30% OFF'
                    <div className='prices'>₹ 2415  MRP <span className='cut-price'>₹ 3450</span>/-</div>
              </div>
          </div>
        </div>
        <div className="a-div1">
          <div className='product'onClick={() => handleProductClick('SL128')}>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722709048/WhatsApp_Image_2024-08-03_at_23.37.54_okfzbg.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Round Japan Handbag</div>
                    'Flat 30% OFF'
                    <div className='prices'>₹ 3833 MRP <span className='cut-price'>₹ 5475</span>/-</div>
              </div>
          </div>
          <div className='product'onClick={() => handleProductClick('SL148')}>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722709029/WhatsApp_Image_2024-08-03_at_23.37.58_cgjeas.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Hermen's Bag</div>
                    'Flat 30% OFF'
                    <div className='prices'>₹ 3759  MRP <span className='cut-price'>₹ 5370</span>/-</div>
              </div>
          </div>
        </div>
        <div className="a-div1">
          <div className='product'onClick={() => handleProductClick('SL165')}>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722709042/WhatsApp_Image_2024-08-03_at_23.38.03_srgdet.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Yoshi 2</div>
                    'Flat 30% OFF'
                    <div className='prices'>₹ 2436 MRP <span className='cut-price'>₹ 3480</span>/-</div>
              </div>
          </div>
          <div className='product'onClick={() => handleProductClick('SL140')}>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722709006/WhatsApp_Image_2024-08-03_at_23.38.00_dauzrh.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Sling With Chain</div>
                    'Flat 30% OFF'
                    <div className='prices'>₹ 1838 MRP <span className='cut-price'>₹ 2625</span>/-</div>
              </div>
          </div>
        </div>
        <div className="a-div1">
          <div className='product'onClick={() => handleProductClick('SL141')}>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688058/handbag_4_gtfc17.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Oliva</div>
                    'Flat 30% OFF'
                    <div className='prices'>₹ 1575 MRP <span className='cut-price'>₹ 2250</span>/-</div>
              </div>
          </div>
        </div>

     

      </div>
      </div>
      <div ref={contactUsRef}>
        <ContactUs />
      </div>
    </div>
  )
}

export default WomensBags
