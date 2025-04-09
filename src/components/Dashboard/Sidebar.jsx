import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaCalendarCheck, FaPills, FaInfoCircle, FaHeartbeat, FaUserMd, FaStethoscope, FaNotesMedical, FaHistory, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';


const Sidebar = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Kërko për rolin e përdoruesit nga serveri
    axios.get('http://localhost:8080/role', { withCredentials: true })
      .then(res => {
        if (res.data.valid) {
          setRole(res.data.role);
        } else {
          navigate('/login');
        }
      })
      .catch(err => navigate('/login'));
  }, []);

  const handleLogout = () => {
    axios.get('http://localhost:8080/logout')
      .then(() => {
        navigate('/login');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="sidebar" style={{ width: '250px', height: '100vh', backgroundColor: '#f4f4f4', paddingTop: '20px' }}>
      <div className="sidebar-header" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white' }}>
        <h4>Shëndetiim</h4>
      </div>

      <ul className="nav flex-column" style={{ listStyleType: 'none', padding: '0' }}>
        <li className="nav-item">
          <a href="/dashboard" className="nav-link" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>
            <FaHeartbeat className="me-2" />
            Dashboard
          </a>
        </li>
        
        <li className="nav-item">
          <a href="/patients" className="nav-link" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>
            <FaUserMd className="me-2" />
            Pacientët
          </a>
        </li>

        {role === 'Admin' && (
          <li className="nav-item">
            <a href="/manageDoctors" className="nav-link" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>
              <FaStethoscope className="me-2" />
              Menaxho Mjekët
            </a>
          </li>
        )}

        <li className="nav-item">
          <a href="/appointments" className="nav-link" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>
            <FaNotesMedical className="me-2" />
            Konsulta
          </a>
        </li>

        <li className="nav-item">
          <a href="/medicalHistory" className="nav-link" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>
            <FaHistory className="me-2" />
            Historiku Mjekësor
          </a>
        </li>

        <li className="nav-item">
          <a href="/testResults" className="nav-link" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>
            <FaClipboardList className="me-2" />
            Rezultatet e Testeve
          </a>
        </li>

        <li className="nav-item">
          <a href="/" onClick={handleLogout} className="nav-link" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>
            <FaSignOutAlt className="me-2" />
            Dil
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
