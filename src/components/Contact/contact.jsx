import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      {/* LOKACIONI */}
      <div className="contact-location">
      
        <iframe
          title="Google Maps"
          className="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9185690586785!2d-122.083851!3d37.3860515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb6aa72c9f73d%3A0x9f5a7d8691e1b4c3!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614278982819!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* FORMA E KONTAKTIT */}
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
