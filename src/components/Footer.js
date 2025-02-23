import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:stlmstalha@gmail.com">stlmstalha@gmail.com</a></p>
          <p>Phone: <a href="tel:+905536998848">05536998848</a></p>
        </div>
        <div className="footer-social">
          <h3>Social Media</h3>
          <div className="social-links">
            <a href="https://github.com/ekincitalha" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/talha-ekinci-724b801b2/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2025 Talha Ekinci.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 