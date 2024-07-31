import React, { useState, useEffect } from 'react';
import './Carousel.css';
import bg1 from '../../assets/Images/bg1.webp';
import bg2 from '../../assets/Images/bg2.webp';
import bg3 from '../../assets/Images/bg3.webp';
import bg4 from '../../assets/Images/bg4.webp';
import bg5 from '../../assets/Images/bg5.webp';
import bg11 from '../../assets/Images/bg11.webp';
import bg22 from '../../assets/Images/bg22.png';
import bg33 from '../../assets/Images/bg33.webp';
import bg44 from '../../assets/Images/bg44.webp';
import bg55 from '../../assets/Images/bg55.webp';

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    let timeOut = null;

    const car = [{ image: bg1 }, { image: bg2 }, { image: bg3 }, { image: bg4 }, { image: bg5 }];
    const car1 = [{ image: bg11 }, { image: bg22 }, { image: bg33 }, { image: bg44 }, { image: bg55 }];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        timeOut = autoPlay && setTimeout(() => {
            slideRight();
        }, 3000);

        return () => clearTimeout(timeOut);
    }, [current, autoPlay]);

    const slideRight = () => {
        setCurrent(current === car.length - 1 ? 0 : current + 1);
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? car.length - 1 : current - 1);
    };

    const imagesToDisplay = isMobile ? car1 : car;

    return (
        <div
            onMouseEnter={() => {
                setAutoPlay(false);
                clearTimeout(timeOut);
            }}
            onMouseLeave={() => {
                setAutoPlay(true);
            }}
            className='Carousel'
        >
            <div className='Carousel-wrapper'>
                {imagesToDisplay.map((image, index) => (
                    <div
                        key={index}
                        className={index === current ? 'carousel-image carousel-image-active' : 'carousel-image'}
                        style={{ backgroundImage: `url(${image.image})` }}
                    >
                    </div>
                ))}
                <div className="carousel_arrow_left" onClick={slideLeft}>
                    &lsaquo;
                </div>
                <div className="carousel_arrow_right" onClick={slideRight}>
                    &rsaquo;
                </div>
                <div className="carousel_pagination">
                    {imagesToDisplay.map((_, index) => (
                        <div
                            key={index}
                            className={
                                index === current
                                    ? 'pagination_dot pagination_dot-active'
                                    : 'pagination_dot'
                            }
                            onClick={() => setCurrent(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
