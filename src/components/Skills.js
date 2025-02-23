import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const sectionRef = useRef(null);

  const skills = {
    Backend: [
      { name: 'Java (Spring Boot)', level: 85 },
      { name: 'C#', level: 75 }
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
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 75 }
    ],
    Other: [
      { name: 'Git', level: 85 },
      { name: 'Agile Methodology', level: 80 }
    ]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
      },
      {
        threshold: 0.5,
        rootMargin: '-100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
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