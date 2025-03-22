import React from 'react';
import './footer.css';
import InstagramIcon from '../../imgs/InstagramIcon.png';
import LinkedInIcon from '../../imgs/LinkedInIcon.png';
import YoutubeIcon from '../../imgs/YoutubeIcon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Healthy Life</h2>
        <p>Your trusted source for medical and wellness care.</p>

        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={YoutubeIcon} alt="YouTube" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Healthy Life. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
