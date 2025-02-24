import React, { useState, useEffect } from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navHeight = document.querySelector('.navigation').offsetHeight;
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'showcase-section'];
      const navHeight = document.querySelector('.navigation').offsetHeight;
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const topOffset = rect.top - navHeight;
          const bottomOffset = rect.bottom - navHeight;
          
          // Ana sayfa için özel kontrol
          if (section === 'home') {
            return topOffset <= 0 && bottomOffset > 0;
          }
          
          // Diğer bölümler için kontrol
          return topOffset <= 50 && bottomOffset > 50;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // İlk yüklemede de çalıştır
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navigation">
      <div className="nav-content">
        <a 
          href="#home" 
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Talha Ekinci
        </a>
        
        <button 
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <a 
            href="#home" 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Ana Sayfa
          </a>
          <a 
            href="#skills" 
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }}
          >
            Yetenekler
          </a>
          <a 
            href="#showcase-section" 
            className={`nav-link ${activeSection === 'showcase-section' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('showcase-section');
            }}
          >
            Deneyim
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 