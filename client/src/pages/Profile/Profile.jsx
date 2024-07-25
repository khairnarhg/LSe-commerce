import React from 'react';
import './Profile.css';
import Navbar from '../../components/Navbar/Navbar';
import ContactUs from '../../components/ContactUs/ContactUs';

const Profile = () => {
  return (
    <div className='Profile-container'>
        <Navbar/>
        <div className='Profile-main-container'>
            <div className='white-blur-screen'>
                <div className='left-part'>
                    <div className='nav-gav'>
                        <header className='profile-heading'>
                            Welcome! User,
                        </header>
                        <div className='purchased-orders'>
                            <div className='po-header'>
                                Your Orders
                            </div>
                            <div className='heading-underline'></div>
                            <div className='order-display'>
                                Orders will be displayed here
                            </div>
                        </div>

                    </div>
                </div>
                <div className='right-part'>
                    <div className='button-area'>
                        <button className='profile-logout'>Logout</button>
                        <div className='Adress-area'>
                            <div className='add-header'>
                                Primary Address
                            </div>
                            <div className='add-heading-underline'></div>
                            <div className='address-username'>
                                User
                            </div>
                            <div className='user-primary-address'>
                                Flat- 1X2, Apartment, Plot-XX,
                                Sector- XX, Mumbai, India
                            </div>

                        </div>


                    </div>
                    <div className='address'>

                    </div>

                </div>

            </div>

        </div>
        <ContactUs/>
    </div>
  )
}

export default Profile;
