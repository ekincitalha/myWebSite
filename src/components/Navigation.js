import React from 'react';
import './Navigation.css';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-content">
        <div className="logo">
          <span>TALHA EKİNCİ</span>
        </div>
        <ul className="nav-links">
          <li onClick={() => scrollToSection('skills')}>Skills</li>
          <li onClick={() => scrollToSection('experience')}>Experience</li>
          <li onClick={() => scrollToSection('footer')}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 