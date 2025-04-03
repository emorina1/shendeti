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

import Login from './components/LogIn/login.jsx'; // Shto komponentin Login

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
      </Routes>
    </Router>
  );
}

export default App;
