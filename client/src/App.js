import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon/ComingSoon.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Recovery from './pages/Recovery/Recovery.jsx';
import Profile from './pages/Profile/Profile.jsx';
import CorporateGifts from './pages/CorporateGifts/CorporateGifts.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import WomensBags from './pages/FullShop/WomensBags/WomensBags.jsx';
import MensBags from './pages/FullShop/MensBags/MensBags.jsx';
import Accessories from './pages/FullShop/Accessories/Accessories.jsx';
import TravelBags from './pages/FullShop/TravelBags/TravelBags.jsx';
import Apparels from './pages/FullShop/Apparels/Apparels.jsx';
import Giftwares from './pages/FullShop/Giftwares/Giftwares.jsx';
import ProductDescription from './pages/ProductDescription/ProductDescription.jsx';
import Cart from './pages/Cart/Cart.jsx';
import WpLink from './pages/WpLink/WpLink.jsx';
import { AuthProvider } from './utils/AuthContext.js'

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          {/* <Route path="/homePage" element={<HomePage/>}/> */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/recovery" element={<Recovery/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/corporategifts" element={<CorporateGifts/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/womensbags" element={<WomensBags/>}/>
          <Route path="/mensbags" element={<MensBags/>}/>
          <Route path="/accessories" element={<Accessories/>}/>
          <Route path="/travelbags" element={<TravelBags/>}/>
          <Route path="/apparels" element={<Apparels/>}/>
          <Route path="/giftwares" element={<Giftwares/>}/>
          <Route path="/products/:id" element={<ProductDescription />} />
          <Route path="/buynow" element={<WpLink/>}/>
          {/* <Route path="/cart" element={<Cart/>}/> */}
        </Routes>

      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
