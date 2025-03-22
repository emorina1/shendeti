import React from 'react';
import './healthy.css';

const Healthy = () => {
  return (
    <div className="healthy-section">
      <h2 className="healthy-title">Easily Book Your Doctor</h2>
      <p className="healthy-subtitle">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad molestiae ut.
      </p>
      
      <div className="healthy-cards">
        <div className="healthy-card">
          <img src="vaccination-icon.png" alt="Vaccination" className="healthy-icon" />
          <h3>Vaccination</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>

        <div className="healthy-card highlighted">
          <img src="emergency-icon.png" alt="Emergency" className="healthy-icon" />
          <h3>Emergency</h3>
          <p>Lorem ipsum is simply dummy text of the printing industry.</p>
        </div>

        <div className="healthy-card">
          <img src="medical-icon.png" alt="Medical Center" className="healthy-icon" />
          <h3>Medical Center</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>

        <div className="healthy-card">
          <img src="doctor-icon.png" alt="Doctor Specialist" className="healthy-icon" />
          <h3>Doctor Specialist</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Healthy;
