import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon/ComingSoon.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/comingSoon" element={<ComingSoon/>}/>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
