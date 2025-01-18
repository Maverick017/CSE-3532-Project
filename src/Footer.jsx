import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faLinkedin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <img src="src\assets\Screenshot 2025-01-18 071557.png" alt="Mentorcam Logo" className="logo" />
          <span>Mentorcam</span>
        </div>
        <p>1:1 advice from otherwise inaccessible mentors</p>
        <div className="social-icons">
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" color="#000000" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#000000" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" color="#000000" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" color="#000000" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025 Mentorcam, Inc. — 2450 Colorado Ave. Suite 100E, Santa Monica, CA 90404
        </p>
        <div className="links">
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/mentor-terms">Mentor Terms</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/cookie-policy">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
