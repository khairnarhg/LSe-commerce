import React, {useState, useEffect} from 'react';
import './Carousel.css';
import bg1 from '../../assets/Images/bg1.png';
import bg2 from '../../assets/Images/bg2.png';
import bg3 from '../../assets/Images/bg3.png';
import bg4 from '../../assets/Images/bg4.png';

const Carousel = () => {

    const[current, setCurrent]= useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;
    const car=[{image: bg1}, {image: bg2}, {image: bg3}, {image: bg4}];
    useEffect(() => {
        timeOut =
          autoPlay &&
          setTimeout(() => {
            slideRight();
          }, 3000);
      });
      const slideRight = () => {
        setCurrent(current === car.length - 1 ? 0 : current + 1);
      };
    
      const slideLeft = () => {
        setCurrent(current === 0 ? car.length - 1 : current - 1);
      };

    return (
        <div 
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }} 
        className='Carousel'>
            <div className='Carousel-wrapper'>
                {car.map((image, index)=>{
                    return(
                        <div  key={index} className={index===current ? "carousel-image carousel-image-active"   : 'carousel-image'}>
                            <img src={image.image} alt="" className='card-image'/>
                        </div>
                    );
                })}
                <div className="carousel_arrow_left" onClick={slideLeft}>
                    &lsaquo;
                </div>
                <div className="carousel_arrow_right" onClick={slideRight}>
                    &rsaquo;
                </div>
                <div className="carousel_pagination">
          {car.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
              </div>
        
        </div>
    );
}

export default Carousel;
