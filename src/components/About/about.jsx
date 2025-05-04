import React, { useState } from 'react';
import './about.css';
import aboutImage from '../../imgs/photo.png';

const AboutUs = () => {
  const [showTimetable, setShowTimetable] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleTimetableClick = () => {
    setShowTimetable(!showTimetable);
  };

  return (
    <div id="about" className="about-section">
      <h1 className="jo">Welcome to Healthy Life</h1>
      <p className="po">
        Our goal is to provide you with everything you need for a healthier lifestyle.
        From fitness advice to nutritious meals, we offer guidance to help you make the best decisions
        for your well-being. Stay healthy, stay happy!
      </p>

      <div className="info-cards">
        <div className="card light-blue">
          <i className="fas fa-ambulance card-icon"></i>
          <h3>Emergency Cases</h3>
          <p>There are many variations of passages of Lorem Ipsum available...</p>
          <p className="phone-number">📞 987 654 321</p>
        </div>

        <div className="card dark-blue">
          <i className="fas fa-user-md card-icon"></i>
          <h3>Doctors Timetable</h3>
          <p>The majority have suffered alteration in some form...</p>
          <button className="card-button" onClick={handleTimetableClick}>
            Timetable ➝
          </button>
        </div>

        <div className="card light-blue">
          <i className="fas fa-clock card-icon"></i>
          <h3>Opening Hours</h3>
          <p>
            Monday - Friday: 8:00 - 7:00 PM <br />
            Saturday: 6:00 - 5:00 PM <br />
            Sunday: 8:00 - 2:00 PM <br />
            Emergency: 24H/7Days
          </p>
        </div>
      </div>

      {showTimetable && (
        <div className="timetable-table">
          <h3>Doctors Timetable</h3>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Doctor</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>Dr. Smith</td>
                <td>09:00 - 13:00</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>Dr. Johnson</td>
                <td>11:00 - 15:00</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>Dr. Brown</td>
                <td>10:00 - 14:00</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>Dr. Taylor</td>
                <td>12:00 - 16:00</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>Dr. Wilson</td>
                <td>08:00 - 12:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
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
          <button className="read-more" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'READ LESS' : 'READ MORE'}
          </button>

          {showMore && (
            <div className="more-info">
              <p>
                At Healthy Life, we go beyond traditional care. Our expert team is dedicated to offering personalized treatment plans,
                mental health support, and regular wellness checkups. Whether you're looking to improve your physical fitness or manage a chronic condition,
                we’re here to help you every step of the way.
              </p>
              <ul>
                <li>🏥 Advanced Diagnostic Equipment</li>
                <li>🧠 Mental Health & Counseling Services</li>
                <li>🥗 Personalized Nutrition Planning</li>
                <li>💡 Health Awareness Campaigns</li>
                <li>📈 Patient Progress Tracking Tools</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
