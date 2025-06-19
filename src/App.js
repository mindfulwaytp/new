import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header';
import Home from './Home';
import ProviderProfile from './pages/ProviderProfile'; // ✅ Update path if needed
import ProviderDirectory from './pages/ProviderDirectory'; // ✅ THIS IS CORRECT
import Neurodiversity from './pages/Neurodiversity';
import JobBoard from './pages/jobs/index';
import LGBTQTherapistJob from './pages/jobs/lgbtq-therapist';
import ADHDTherapistJob from './pages/jobs/adhd-therapist';
import Internships from './pages/jobs/internships'; // ✅ New import for ADHD Therapist job
import ContactPage from './pages/contact';




function App() {
  return (
    <div className="bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/providers" element={<ProviderDirectory />} />
        <Route path="/providers/:slug" element={<ProviderProfile />} /> {/* ✅ New route */}
        <Route path="/neurodiversity" element={<Neurodiversity />} />
        <Route path="/jobs/lgbtq-therapist" element={<LGBTQTherapistJob />} />
        <Route path="/jobs/adhd-therapist" element={<ADHDTherapistJob />} />
        <Route path="/jobs/internships" element={<Internships />} />
        <Route path="/jobs" element={<JobBoard />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
