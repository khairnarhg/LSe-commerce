import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/homePage.jsx';
import LoginPage from './pages/Login/login.jsx';
import Signup from './pages/Login/signup.jsx';
import Recover from './pages/Login/recover.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Register from './pages/Register/Register.jsx';
import Profile from './pages/Profile/Profile.jsx';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import Corporate from './pages/corporate gifts/corporate.jsx';

function App() {
  return (
    <Router>
      <div className="app-background">
        <NavigationBar />
        <Routes>
          <Route path='/homePage' element={<HomePage />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/recover' element={<Recover />} />
          <Route path='/corporate' element={<Corporate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
