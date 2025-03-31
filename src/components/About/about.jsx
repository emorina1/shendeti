import React from 'react';
import './about.css';
import aboutImage from '../../imgs/photo.png'; // Shto një foto në projektin tënd

const AboutUs = () => {
  return (
<div id="about" className="about-section">
      {/* Seksioni i kutive (cards) */}
      <div className="info-cards">
        <div className="card light-blue">
          <img src="emergency-icon.png" alt="Emergency Icon" className="card-icon" />
          <h3>Emergency Cases</h3>
          <p>There are many variations of passages of Lorem Ipsum available...</p>
          <p className="phone-number">📞 987 654 321</p>
        </div>

        <div className="card dark-blue">
          <img src="doctor-icon.png" alt="Doctor Icon" className="card-icon" />
          <h3>Doctors Timetable</h3>
          <p>The majority have suffered alteration in some form...</p>
          <button className="card-button">Timetable ➝</button>
        </div>

        <div className="card light-blue">
          <img src="clock-icon.png" alt="Clock Icon" className="card-icon" />
          <h3>Opening Hours</h3>
          <p>
            Monday - Friday: 8:00 - 7:00 PM <br />
            Saturday: 6:00 - 5:00 PM <br />
            Sunday: 8:00 - 2:00 PM <br />
            Emergency: 24H/7Days
          </p>
        </div>
      </div>

      {/* Seksioni "About Us" me foto në të majtë dhe tekst në të djathtë */}
      <div className="about-container">
        {/* Ana e majtë me imazhin */}
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>

        {/* Ana e djathtë me tekstin */}
        <div className="about-content">
          <h4 className="about-tag">WHAT ABOUT US</h4>
          <h2>The Heart And Science Of Medic Test</h2>
          <p>It is a long established fact that a reader will be distracted by its layout...</p>
          <ul>
            <li>✔️ Comprehensive Inpatient Services</li>
            <li>✔️ Medical And Surgical Services</li>
            <li>✔️ Medical & Infirmary</li>
            <li>✔️ Specialized Support Services</li>
            <li>✔️ Instant Operations & Appointment</li>
          </ul>
          <button className="read-more">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
