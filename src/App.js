import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header';
import Home from './Home';
import Providers from './Providers'; // ✅ Make sure this stays here

function App() {
  return (
    <div className="bg-white">
      <Header />

      {/* ✅ This is where you define your route-based pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/providers" element={<Providers />} /> {/* ✅ Add this line */}
      </Routes>
    </div>
  );
}

export default App;
