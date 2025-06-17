import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header';
import Home from './Home';
import ProviderProfile from './pages/ProviderProfile'; // ✅ Update path if needed
import ProviderDirectory from './pages/ProviderDirectory'; // ✅ THIS IS CORRECT
import Neurodiversity from './pages/Neurodiversity';


function App() {
  return (
    <div className="bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/providers" element={<ProviderDirectory />} />
        <Route path="/providers/:slug" element={<ProviderProfile />} /> {/* ✅ New route */}
        <Route path="/neurodiversity" element={<Neurodiversity />} />
      </Routes>
    </div>
  );
}

export default App;
