import React from 'react';
import './WomensBags.css';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar.jsx';
import ContactUs from '../../../components/ContactUs/ContactUs.jsx';
import WMimg from '../../../assets/Images/womensbagscat.webp';

const WomensBags = () => {
  return (
    <div className='wm-container'>
      <Navbar/>
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
      <div className="product-area">
        <div className="a-div1">
          <div className='product'>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688072/purse_blue_1_pzqbdc.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Handle Bag</div>
                  <span className='prices'>₹ 788 MRP <span className='cut-price'>₹ 1125</span>/-</span>
            </div>
          </div>
          <div className='product'>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688072/purse_3_red_dgxvlm.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Bucket Bag</div>
                  <span className='prices'>₹ 623 MRP <span className='cut-price'>₹ 890</span>/-</span>
            </div>
          </div>
        </div>
        <div className="a-div1">
        <div className='product'>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688071/purse_blue3_akhujd.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Eco Shiny Tote</div>
                  <span className='prices'>₹ 578 MRP <span className='cut-price'>₹ 825</span>/-</span>
            </div>
          </div>
          <div className='product'>
            <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688071/womenpurse4_p7sba8.webp" alt="" className='product-img'/>
            <div className='product-title'>
                  <div className='product-name'>Big Armani Bag</div>
                  <span className='prices'>₹ 525  MRP <span className='cut-price'>₹ 750</span>/-</span>
            </div>
          </div>
        </div>
        <div className="a-div1">
          <div className='product'>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688055/purse_uwzh3s.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Women's Clutch</div>
                    <span className='prices'>₹ 441 MRP <span className='cut-price'>₹ 630</span>/-</span>
              </div>
          </div>
          <div className='product'>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688059/sidebag_browm_8_fcjirx.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Side Bag</div>
                    <span className='prices'>₹ 525  MRP <span className='cut-price'>₹ 750</span>/-</span>
              </div>
          </div>
        </div>
        <div className="a-div1">
          <div className='product'>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688055/sideblue_4_ivt8cg.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Cross Body Sling</div>
                    <span className='prices'>₹ 441 MRP <span className='cut-price'>₹ 630</span>/-</span>
              </div>
          </div>
          <div className='product'>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688066/SL162T_wjme9c.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Triangle Sling Bag</div>
                    <span className='prices'>₹ 525  MRP <span className='cut-price'>₹ 750</span>/-</span>
              </div>
          </div>
        </div>
        <div className="a-div1">
          <div className='product'>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688054/SL105_atas6i.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Square Ladies Laptop Bag</div>
                    <span className='prices'>₹ 441 MRP <span className='cut-price'>₹ 630</span>/-</span>
              </div>
          </div>
          <div className='product'>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688054/SL177_3_p5h8ev.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Versatile Women's Bag</div>
                    <span className='prices'>₹ 525  MRP <span className='cut-price'>₹ 750</span>/-</span>
              </div>
          </div>
        </div>
        <div className="a-div1">
          <div className='product'>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722709037/WhatsApp_Image_2024-08-03_at_23.38.00_1_cxnxzj.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Baddel Habdel</div>
                    <span className='prices'>₹ 441 MRP <span className='cut-price'>₹ 630</span>/-</span>
              </div>
          </div>
          <div className='product'>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722709021/WhatsApp_Image_2024-08-03_at_23.37.55_1_sqdhyf.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Small Armani Bag</div>
                    <span className='prices'>₹ 525  MRP <span className='cut-price'>₹ 750</span>/-</span>
              </div>
          </div>
        </div>
        <div className="a-div1">
          <div className='product'>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722709048/WhatsApp_Image_2024-08-03_at_23.37.54_okfzbg.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Round Japan Handbag</div>
                    <span className='prices'>₹ 441 MRP <span className='cut-price'>₹ 630</span>/-</span>
              </div>
          </div>
          <div className='product'>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722709029/WhatsApp_Image_2024-08-03_at_23.37.58_cgjeas.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Hermen's Bag</div>
                    <span className='prices'>₹ 525  MRP <span className='cut-price'>₹ 750</span>/-</span>
              </div>
          </div>
        </div>
        <div className="a-div1">
          <div className='product'>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722709042/WhatsApp_Image_2024-08-03_at_23.38.03_srgdet.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Yoshi 2</div>
                    <span className='prices'>₹ 441 MRP <span className='cut-price'>₹ 630</span>/-</span>
              </div>
          </div>
          <div className='product'>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722709006/WhatsApp_Image_2024-08-03_at_23.38.00_dauzrh.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Sling With Chain</div>
                    <span className='prices'>₹ 525  MRP <span className='cut-price'>₹ 750</span>/-</span>
              </div>
          </div>
        </div>
        <div className="a-div1">
          <div className='product'>
              <img src="https://res.cloudinary.com/dyyocxffd/image/upload/v1722688058/handbag_4_gtfc17.webp" alt="" className='product-img'/>
              <div className='product-title'>
                    <div className='product-name'>Oliva</div>
                    <span className='prices'>₹ 441 MRP <span className='cut-price'>₹ 630</span>/-</span>
              </div>
          </div>
        </div>

     

      </div>
      </div>
      <ContactUs/>
    </div>
  )
}

export default WomensBags
