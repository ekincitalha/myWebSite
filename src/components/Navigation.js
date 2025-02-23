import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const scrollToSection = (sectionId) => {
    try {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveTab(sectionId);
      }
    } catch (error) {
      console.log(`Section ${sectionId} not found`);
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-content">
        <div className="logo">
          <span>TALHA EKİNCİ</span>
        </div>
        <ul className="nav-links">
          <li>
            <button 
              className={activeTab === 'skills' ? 'active' : ''} 
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
          </li>
          <li>
            <button 
              className={activeTab === 'experience' ? 'active' : ''} 
              onClick={() => scrollToSection('experience')}
            >
              Portfolio
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 