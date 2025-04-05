import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav'; // Importimi i Nav

// CSS e nevojshme
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Dashboard.css'; // Krijoje këtë skedar nëse nuk ekziston

const Dashboard = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Përdor portin 8080, i cili është caktuar në .env dhe në server
    axios.get('http://localhost:8080', { withCredentials: true })
      .then(res => {
        if (res.data.valid) {
          setEmail(res.data.email);
          setRole(res.data.role);
        } else {
          console.log('Përdoruesi nuk është i validuar');
          navigate('/login');
        }
      })
      .catch((error) => {
        console.log('Gabim gjatë thirrjes:', error);
        navigate('/login');
      });
  }, [navigate]);

  // Kontrollo nëse email dhe roli janë të saktë
  const isAdmin = email === 'elsamorina@gmail.com' && role === 'admin';
  const handleNavigate = (path) => navigate(path);

  return (
    <div className="d-flex min-vh-100 bg-light">
      <Nav /> {/* Shtimi i komponentit Nav */}
      <div className="container-fluid mt-4">
        <div className="row mt-5">
          {isAdmin ? (
            <>
              <DashboardCard label="Medicine" icon="fa-medkit" color="primary" path="/medicine" handleNavigate={handleNavigate} />
              <DashboardCard label="Patients" icon="fa-user-injured" color="success" path="/patients" handleNavigate={handleNavigate} />
              <DashboardCard label="Profile" icon="fa-user" color="info" path="/profile" handleNavigate={handleNavigate} />
              <DashboardCard label="Rooms" icon="fa-door-open" color="warning" path="/rooms" handleNavigate={handleNavigate} />
            </>
          ) : (
            <>
              <DashboardCard label="My Profile" icon="fa-user" color="primary" path="/myprofile" handleNavigate={handleNavigate} />
              <DashboardCard label="Appointments" icon="fa-calendar-check" color="success" path="/appointments" handleNavigate={handleNavigate} />
              <DashboardCard label="Services" icon="fa-stethoscope" color="info" path="/services" handleNavigate={handleNavigate} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ label, icon, color, path, handleNavigate }) => (
  <div className="col-md-3 mb-4" onClick={() => handleNavigate(path)} style={{ cursor: 'pointer' }}>
    <div className={`card shadow h-100 py-2 border-left-${color}`}>
      <div className="card-body text-center">
        <h5>{label}</h5>
        <i className={`fa ${icon} fa-2x text-${color}`}></i>
      </div>
    </div>
  </div>
);

export default Dashboard;
