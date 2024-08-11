import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Yahoo from './Component/Yahoo'; 
// import  Nav  from "./Component/Nav.js";
import './index.css';
import YahooPassword from './Component/YahooPassword';


function App() {
  return (
    <Router>
    <div className="App">
    {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Yahoo />} />
        <Route path="/yahoopassword" element={<YahooPassword />} />
      </Routes>
    </div>
  </Router>
 
  );
}

export default App;
