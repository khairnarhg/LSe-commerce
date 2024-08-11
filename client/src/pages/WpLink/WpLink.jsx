import React from 'react';
import { Link } from 'react-router-dom';
import './WpLink.css';
import Navbar from '../../components/Navbar/Navbar';
import ContactUs from '../../components/ContactUs/ContactUs';
import { useLocation } from 'react-router-dom';



const WpLink = () => {
    const { state } = useLocation();
    const { productName, productId } = state || {};
    const phoneNumber = '+91 998-789-8988'; // Replace with your phone number in international format
    const message = `Hello, I am interested in your product. Product Name: ${productName}`; // Replace with your message
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;



  return (
    <div className='WpLink-container'>
        <Navbar/>
        <div className="wplink-main-container">
            <div className="wplink-intr1">
            "You're Just One Step Away from Indulging in Luxurious Leather Excellence."
            </div>
            <div className="wplink-intr2">
            "Click ‘Buy Now!’ and Send Us Your Product Choice via WhatsApp for a Seamless Shopping Experience!"
            </div>
            <div></div> Whatsapp No.: +91 998-789-8988
            <button
            className='whatsapp-button'
            onClick={() => window.open(whatsappUrl, '_blank')}
            >
                Buy Now
            </button>
            <div className="wplink-intr3">
            "Enjoy Fast Delivery! Your Stylish Product Will Arrive at Your Doorstep Within Just 3 Business Days. Shop Now for a Swift and Hassle-Free Experience!"
            </div>
        </div>
        <ContactUs/>
    </div>
  )
}

export default WpLink;
