import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './services.css';

import Doc1 from '../../imgs/Doc1.png';
import Doc2 from '../../imgs/Doc2.png';
import Doc3 from '../../imgs/Doc3.png';
import Doc4 from '../../imgs/Doc4.png';
import Doc5 from '../../imgs/Doc5.png';
import Doc6 from '../../imgs/Doc6.png';

const doctors = [
  { id: 1, name: "Dr. Bob Brown", specialty: "General Dentist", description: "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.", image: Doc1 },
  { id: 2, name: "Dr. Mary Smith", specialty: "General Dentist", description: "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.", image: Doc2 },
  { id: 3, name: "Dr. Nick Dark", specialty: "Orthodontist", description: "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.", image: Doc3 },
  { id: 4, name: "Dr. Sarah White", specialty: "Pediatric Dentist", description: "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.", image: Doc4 },
  { id: 5, name: "Dr. James Green", specialty: "Oral Surgeon", description: "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.", image: Doc5 },
  { id: 6, name: "Dr. Emma Blue", specialty: "Prosthodontist", description: "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.", image: Doc6 },
];

const Services = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div id="services" className="services-section">
      <h2 className="services-title">Our Expert Doctors</h2>

      <Slider {...settings} className="doctor-slider">
        {doctors.map((doctor) => (
          <div
            className="doctor-card"
            key={doctor.id}
            onClick={() => setSelectedDoctor(doctor)}
            style={{ cursor: 'pointer' }}
          >
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <h3 className="doctor-specialty">{doctor.specialty}</h3>
            <h2 className="doctor-name">{doctor.name}</h2>
            <p className="doctor-description">{doctor.description}</p>
            <div className="doctor-socials">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        ))}
      </Slider>

      {selectedDoctor && (
        <div className="doctor-detail">
          <h3>About {selectedDoctor.name}</h3>
          <div className="doctor-detail-content">
            <img src={selectedDoctor.image} alt={selectedDoctor.name} className="doctor-detail-image" />
            <div>
              <h4>Specialty: {selectedDoctor.specialty}</h4>
              <p>{selectedDoctor.description}</p>
              <p>
                {selectedDoctor.name} is a highly experienced {selectedDoctor.specialty.toLowerCase()} known for their excellent patient care
                and expertise in the latest medical techniques. Schedule an appointment today to meet {selectedDoctor.name} in person!
              </p>
              <button onClick={() => setSelectedDoctor(null)} className="close-btn">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
