import React from 'react'
import './ShopByCategory.css';
import Accessories from '../../assets/Images/Accessories.png';
import MensBags from '../../assets/Images/mensBags.webp';
import WomensBags from '../../assets/Images/WomensBags.jpg';
import Apparrels from '../../assets/Images/Apparrels.webp';
import TravelBags from '../../assets/Images/TravelBags.jpg';
import Boxes from '../../assets/Images/Boxes.png';
import { useNavigate } from 'react-router-dom';


const ShopByCategory = () => {
    const navigate= useNavigate();
    const navigateTo=(path)=>{
        window.scrollTo({ top: 0});
        navigate(path);
    }
  return (
    <div className='main-container'>
        <div className='title-group'>
            <div className='line1'> </div>
            <div className='title1'>Shop By Category</div>
            <div className='line2'> </div>
        </div>
        <div className='categories'>
            <div className='div1'>
            <div className='button-title-group'>
                <button className='category-button'onClick={()=>navigateTo('/accessories')}>
                    <img src={Accessories} alt="" />
                </button>
                <div className='category-name'>
                    Accessories
                </div>
            </div>
            <div className='button-title-group'>
                <button className='category-button' onClick={()=>navigateTo('/mensbags')}>
                    <img src={MensBags} alt="" />
                </button>
                <div className='category-name'>
                    Men's Bags
                </div>
            </div>
            </div>
            <div className='div2'>
            <div className='button-title-group'>
                <button className='category-button'onClick={()=>navigateTo('/womensbags')}>
                    <img src={WomensBags} alt="" />
                </button>
                <div className='category-name'>
                    Women's Bags
                </div>
            </div>
            <div className='button-title-group'>
                <button className='category-button'onClick={()=>navigateTo('/apparels')}>
                    <img src={Apparrels} alt="" />
                </button>
                <div className='category-name'>
                    Apparels
                </div>
            </div>
            </div>
            <div className='div3'>
            <div className='button-title-group'>
                <button className='category-button'onClick={()=>navigateTo('/travelbags')}>
                    <img src={TravelBags} alt="" />
                </button>
                <div className='category-name'>
                    Travel Bags
                </div>
            </div>
            <div className='button-title-group'>
                <button className='category-button'onClick={()=>navigateTo('/giftwares')}>
                    <img src={Boxes} alt="" />
                </button>
                <div className='category-name'>
                    Giftwares
                </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default ShopByCategory;
