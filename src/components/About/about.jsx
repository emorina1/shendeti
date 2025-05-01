import React from 'react';
import './about.css';
import aboutImage from '../../imgs/photo.png'; // Përdorimi i imazhit në mënyrë të duhur
// Nuk e përdorim më link brenda JSX, e vendosim në index.html për Google Fonts

const AboutUs = () => {
  return (
    <div id="about" className="about-section">
      {/* Seksioni i kutive (cards) */}
      <h1 className="jo">Welcome to Healthy Life</h1>
      <p className="po">Our goal is to provide you with everything you need for a healthier lifestyle. From fitness advice to nutritious meals, we offer guidance to help you make the best decisions for your well-being. Stay healthy, stay happy! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam deserunt, illo eum laudantium incidunt, ea ipsam fugit provident autem numquam praesentium nulla harum dolorem dignissimos tempore asperiores quia quibusdam?</p>


      <div className="info-cards">
      <div className="card light-blue">
  <i className="fas fa-ambulance card-icon"></i> {/* Ikona e emergjencës */}
  <h3>Emergency Cases</h3>
  <p>There are many variations of passages of Lorem Ipsum available...</p>
  <p className="phone-number">📞 987 654 321</p>
</div>

<div className="card dark-blue">
  <i className="fas fa-user-md card-icon"></i> {/* Ikona e doktorit */}
  <h3>Doctors Timetable</h3>
  <p>The majority have suffered alteration in some form...</p>
  <button className="card-button">Timetable ➝</button>
</div>

<div className="card light-blue">
  <i className="fas fa-clock card-icon"></i> {/* Ikona e orës */}
  <h3>Opening Hours</h3>
  <p>Monday - Friday: 8:00 - 7:00 PM


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
