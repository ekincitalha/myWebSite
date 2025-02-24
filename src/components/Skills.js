import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const sectionRef = useRef(null);

  const skills = {
    Backend: [
      { name: 'Java (Spring Boot)', level: 85 },
      { name: 'C#', level: 75 },
      { name: 'Python', level: 60 }
    ],
    Frontend: [
      { name: 'React.js', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 }
    ],
    Mobile: [
      { name: 'Flutter', level: 70 }
    ],
    Database: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 65 },
      { name: 'MsSQL', level: 60 }
    ],
    Other: [
      { name: 'Git', level: 85 },
      { name: 'Agile Methodology', level: 80 },
    ]
  };

  useEffect(() => {
    const handleDarkMode = (entries) => {
      entries.forEach(entry => {
        const { intersectionRatio, boundingClientRect, rootBounds } = entry;
        
        // Calculate how much of the section is visible in the viewport
        const visibleHeight = Math.min(boundingClientRect.bottom, rootBounds.bottom) -
                            Math.max(boundingClientRect.top, rootBounds.top);
        const visibleRatio = visibleHeight / rootBounds.height;

        // Add dark mode when section is significantly visible (>30% for mobile, >40% for desktop)
        const threshold = window.innerWidth <= 1275 ? 0.3 : 0.4;
        
        if (visibleRatio > threshold) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
      });
    };

    const observer = new IntersectionObserver(handleDarkMode, {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rootMargin: '0px'
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Handle resize events to update dark mode based on new screen size
    const handleResize = () => {
      if (sectionRef.current) {
        const entry = observer.takeRecords()[0];
        if (entry) {
          handleDarkMode([entry]);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="skills-section" ref={sectionRef}>
      <h2>Yetenekler</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skills-list">
              {items.map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 