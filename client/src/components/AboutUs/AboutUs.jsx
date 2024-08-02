import React , {useState, useEffect} from 'react';
import './AboutUs.css';
import img1 from '../../assets/Images/women-aboutUs.webp';
import img2 from '../../assets/Images/aboutUs.webp';
import img3 from '../../assets/Images/men-aboutUs.webp';

const AboutUs = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => {
//         setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//         window.removeEventListener('resize', handleResize);
//     };
// }, []);
  return (
    <div className='aboutUs-container'>
      <div className="aboutUs-header">
        About Leather & Style
      </div>
      <div className="aboutUs-content">
      <div className="img1">
        <img src={img1} alt="women" />
      </div>
      <div className="img2">
        <img src={img2} alt="about" />
      </div>
      <div className="img3">
        <img src={img3} alt="men" />
      </div>
      </div>
      
    </div>
  );
}
export default AboutUs;
