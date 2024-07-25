import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon/ComingSoon.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Recovery from './pages/Recovery/Recovery.jsx';
import Profile from './pages/Profile/Profile.jsx';
// import CorporateGifts from './pages/corporate gifts/corporate.jsx';
// import AboutUs from './pages/AboutUs/AboutUs.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ComingSoon/>}/>
          <Route path="/homePage" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/recovery" element={<Recovery/>}/>
          <Route path="/profile" element={<Profile/>}/>
          {/* <Route path="/corporateGifts" element={<CorporateGifts/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/> */}
        </Routes>

      </Router>
    </div>
  );
}

export default App;
