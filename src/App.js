import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import AboutUs from './components/About/about';
import Healthy from './components/Healthy/healthy';
import Services from './components/Services/services';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Navbar from './components/NavBar/NavBar';
import Signup from './components/LogIn/Signup.jsx';
import Dashboard from './components/Dashboard/dashboard.jsx';

import Login from './components/LogIn/login.jsx'; // Shto komponentin Login



import Medicine from './components/Dashboard/Medicine/medicine.jsx';
import Profile from './components/Dashboard/Profile/profile.jsx';
import Rooms from './components/Dashboard/Room/rooms.jsx';
import Patients from './components/Dashboard/Patient/patients.jsx';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <AboutUs />
            <Healthy />
            <Services />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

    {/* Optional: Rrjete direkte per seksione */}
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rooms" element={<Rooms />} />

      </Routes>
    </Router>
  );
}

export default App;
