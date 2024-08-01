import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Yahoo from './Component/Yahoo'; // Adjust the path as needed
// import  Nav  from "./Component/Nav.js";
import './index.css';


function App() {
  return (
    <Router>
    <div className="App">
    {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Yahoo />} />
        {/* Add more routes here if needed */}
      </Routes>
    </div>
  </Router>
 
  );
}

export default App;
