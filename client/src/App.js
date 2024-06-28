import logo from './logo.svg';
import './App.css';
import react from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/homePage.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Register from './pages/Register/Register.jsx';
import Profile from './pages/Profile/Profile.jsx';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';



function App() {
  return (
  <Router>
    <NavigationBar/>
    <Routes>
      <Route path='/homePage' element={<HomePage />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/loginPage' element={<LoginPage />} />
    </Routes>

  </Router>
  );
}

export default App;
