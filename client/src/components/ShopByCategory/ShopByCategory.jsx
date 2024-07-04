import React from 'react'
import './ShopByCategory.css';
import Accessories from '../../assets/Images/Accessories.png';
import MensBags from '../../assets/Images/mensBags.png';
import WomensBags from '../../assets/Images/WomensBags.jpg';
import Apparrels from '../../assets/Images/Apparrels.png';
import TravelBags from '../../assets/Images/TravelBags.jpg';
import Boxes from '../../assets/Images/Boxes.png';


const ShopByCategory = () => {
  return (
    <div className='main-container'>
        <div className='title-group'>
            <div className='line1'> </div>
            <div className='title'>Shop By Category</div>
            <div className='line2'> </div>
        </div>
        <div className='categories'>
            <div className='button-title-group'>
                <button className='category-button'>
                    <img src={Accessories} alt="" />
                </button>
                <div className='category-name'>
                    Accessories
                </div>
            </div>
            <div className='button-title-group'>
                <button className='category-button'>
                    <img src={MensBags} alt="" />
                </button>
                <div className='category-name'>
                    Men's Bags
                </div>
            </div>
            <div className='button-title-group'>
                <button className='category-button'>
                    <img src={WomensBags} alt="" />
                </button>
                <div className='category-name'>
                    Women's Bags
                </div>
            </div>
            <div className='button-title-group'>
                <button className='category-button'>
                    <img src={Apparrels} alt="" />
                </button>
                <div className='category-name'>
                    Apparells
                </div>
            </div>
            <div className='button-title-group'>
                <button className='category-button'>
                    <img src={TravelBags} alt="" />
                </button>
                <div className='category-name'>
                    Travel Bags
                </div>
            </div>
            <div className='button-title-group'>
                <button className='category-button'>
                    <img src={Boxes} alt="" />
                </button>
                <div className='category-name'>
                    Boxes
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ShopByCategory;
