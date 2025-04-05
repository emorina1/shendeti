import React from 'react';
import { useNavigate } from 'react-router-dom';


const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Shembull për logout – përshtate sipas logjikës që ke
    fetch('http://localhost:8080/logout', {
      method: 'GET',
      credentials: 'include',
    })
      .then(() => navigate('/login'))
      .catch((err) => console.error(err));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm rounded px-3">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold text-primary">Dashboard</span>
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt me-2"></i>Logout
        </button>
      </div>
    </nav>
  );
};

export default Nav;
