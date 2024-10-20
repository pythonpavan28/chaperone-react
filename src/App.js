import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Thankyou from './components/thankyou/thankyou';



function App() {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        {/* Thank You Page route */}
        <Route path="/view-product" element={<Thankyou />} />
      </Routes>
    </Router>
  );
}

export default App;
