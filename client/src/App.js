import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon/ComingSoon.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ComingSoon/>}/>
          <Route path="/homePage" element={<HomePage/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
