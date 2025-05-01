import React from 'react';
import './healthy.css';

const Healthy = () => {
  return (
    <div id="healthy" className="healthy-section">
      <h2 className="healthy-title">Easily Book Your Doctor</h2>
      <p className="healthy-subtitle">
        Book your doctor appointment effortlessly with a few clicks!
      </p>

      <div className="healthy-cards">
        <div className="healthy-card">
          <i className="fas fa-syringe healthy-icon"></i> {/* Ikona e vaksinës */}
          <h3>Vaccination</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>

        <div className="healthy-card highlighted">
          <i className="fas fa-ambulance healthy-icon"></i> {/* Ikona e emergjencës */}
          <h3>Emergency</h3>
          <p>Lorem ipsum is simply dummy text of the printing industry.</p>
        </div>

        <div className="healthy-card">
          <i className="fas fa-hospital-alt healthy-icon"></i> {/* Ikona e qendrës mjekësore */}
          <h3>Medical Center</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>

        <div className="healthy-card">
          <i className="fas fa-user-md healthy-icon"></i> {/* Ikona e doktorit */}
          <h3>Doctor Specialist</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Healthy;
