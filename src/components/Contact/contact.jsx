import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    emailjs
      .sendForm('service_swlub2k', 'template_vtiy4zj', form.current, '30NTbrPtuwxryuN2G')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setMessage('SUCCESS! Your message has been sent.');
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          setMessage('FAILED... Please try again.');
          setLoading(false);
        }
      );
  };

  return (
    <div id="contact" className="contact-section">
      <div className="contact-location">
        <iframe
          title="Google Maps"
          className="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9185690586785!2d-122.083851!3d37.3860515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb6aa72c9f73d%3A0x9f5a7d8691e1b4c3!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614278982819!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="contact-container">
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Contact;
