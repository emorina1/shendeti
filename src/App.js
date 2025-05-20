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
import Login from './components/login';
// import Dashboard from './components/pages/Dashboard';
import Users from "./components/pages/Users";
import Products from "./components/pages/Products";
import AddUser from "./components/pages/AddUser";
import EditUser from "./components/pages/EditUser";
import AddProduct from "./components/pages/AddProduct";
import EditProduct from "./components/pages/EditProduct";
import Dashboard from './Dashboard/Dashboard';






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
        
   
        
        {/* Në dashboard, nuk shfaqet navbar-i */}
   
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/layout" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
