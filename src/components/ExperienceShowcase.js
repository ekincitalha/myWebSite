import React, { useState } from 'react';
import '../styles/ExperienceShowcase.css';

const ExperienceShowcase = () => {
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    {
      company: "BTGM",
      role: "Full-Stack Developer",
      period: "2022 - Present",
      description: "Web tabanlı kurumsal uygulamalar geliştirdim. Backend ve frontend süreçlerinde aktif rol aldım.",
      skills: ["Java", "Spring Boot", "React", "PostgreSQL"]
    },
    {
      company: "Kalemzen",
      role: "Flutter Developer",
      period: "2022",
      description: "Mobil uygulama geliştirme ve UI/UX tasarım süreçlerinde deneyim kazandım.",
      skills: ["Flutter", "Dart", "Firebase"]
    },
    {
      company: "Nero",
      role: "Intern",
      period: "2021",
      description: "Algoritma ve programlama konularında temel beceriler edindim.",
      skills: ["Algorithms", "Programming"]
    }
  ];

  return (
    <div className="experience-container">
      <div className="experience-content">
        <div className="experience-header">
          <h2>Deneyimlerim</h2>
        </div>
        
        <div className="experience-grid">
          <div className="company-list">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`company-item ${index === activeExp ? 'active' : ''}`}
                onClick={() => setActiveExp(index)}
              >
                <span className="company-name">{exp.company}</span>
                <span className="company-period">{exp.period}</span>
              </button>
            ))}
          </div>

          <div className="details-container">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`experience-details ${index === activeExp ? 'active' : ''}`}
              >
                <h3>{exp.role}</h3>
                <span className="company-tag">{exp.company}</span>
                <p className="description">{exp.description}</p>
                
                <div className="skills-list">
                  {exp.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceShowcase; 