import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Sidebar() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080', { withCredentials: true })
      .then(res => {
        if (res.data.valid) {
          setEmail(res.data.email);
        } else {
          navigate('/login');
        }
      })
      .catch(() => navigate('/login'));
  }, [navigate]);

  const isAdmin = email === 'elsamorina@gmail.com';

  const handleLogout = () => {
    axios.get('http://localhost:8080/logout')
      .then(() => navigate('/login'))
      .catch(err => console.log(err));
  };

  const goTo = (path) => navigate(path);

  return (
    <div className="sidebar bg-dark text-white p-3" style={{ width: '250px', minHeight: '100vh' }}>
      <h4 className="mb-4">Health Dashboard</h4>
      <ul className="nav flex-column">
        {isAdmin ? (
          <>
            <li className="nav-item" onClick={() => goTo('/medicine')}>
              <span className="nav-link text-white"><i className="fa fa-medkit"></i> Medicine</span>
            </li>
            <li className="nav-item" onClick={() => goTo('/patients')}>
              <span className="nav-link text-white"><i className="fa fa-user-injured"></i> Patients</span>
            </li>
            <li className="nav-item" onClick={() => goTo('/profile')}>
              <span className="nav-link text-white"><i className="fa fa-user"></i> Profile</span>
            </li>
            <li className="nav-item" onClick={() => goTo('/rooms')}>
              <span className="nav-link text-white"><i className="fa fa-door-open"></i> Rooms</span>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item" onClick={() => goTo('/myprofile')}>
              <span className="nav-link text-white"><i className="fa fa-user"></i> My Profile</span>
            </li>
            <li className="nav-item" onClick={() => goTo('/appointments')}>
              <span className="nav-link text-white"><i className="fa fa-calendar-check"></i> Appointments</span>
            </li>
            <li className="nav-item" onClick={() => goTo('/services')}>
              <span className="nav-link text-white"><i className="fa fa-stethoscope"></i> Services</span>
            </li>
          </>
        )}
        <li className="nav-item mt-4">
          <button onClick={handleLogout} className="btn btn-danger w-100">Logout</button>
        </li>
      </ul>
    </div>
  );
}
