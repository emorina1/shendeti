import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import AboutUs from './components/About/about';
import Healthy from './components/Healthy/healthy';
import Services from './components/Services/services';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Navbar from './components/NavBar/NavBar'; // Importoni Navbar-in
import Signup from './components/LogIn/Signup.jsx';

import Login from './components/LogIn/login.jsx';


function App() {
  return (
    <Router>
      {/* Navbar shfaqet për të gjitha faqet përveç Dashboard */}
      <Routes>
        {/* Faqja kryesore, pa navbar në dashboard */}
        <Route path="/" element={
          <>
            <Navbar />
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
        
        {/* Në dashboard, nuk shfaqet navbar-i */}
   
      
      </Routes>
    </Router>
  );
}

export default App;
