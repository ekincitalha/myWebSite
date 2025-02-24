import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-section">
          <h2>İletişim</h2>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:stlmstalha@gmail.com">stlmstalha@gmail.com</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Ankara, Türkiye</span>
            </div>
          </div>
        </div>

        <div className="social-section">
          <h2>Sosyal Medya</h2>
          <div className="social-links">
            <a href="https://github.com/ekincitalha" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/talha-ekinci-724b801b2/" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <p>© 2024 Talha Ekinci. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer; 