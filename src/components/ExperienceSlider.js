import React, { useState, useEffect } from 'react';
import '../styles/ExperienceSlider.css';

const ExperienceSlider = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const experiences = [
    {
      company: "BTGM",
      position: "Full-Stack Developer",
      period: "Kasım 2022 - Günümüz",
      technologies: ["Java", "Spring Boot", "React"],
      description: [
        "Web tabanlı kurumsal uygulamalar geliştirdim.",
        "Backend ve frontend geliştirme süreçlerinde aktif olarak çalışıyorum."
      ]
    },
    {
      company: "Kalemzen Yazılım",
      position: "Stajyer",
      period: "2022 - 25 Gün",
      technologies: ["Flutter"],
      description: [
        "Android için mobil uygulama geliştirdim.",
        "UI/UX tasarım ve mobil uygulama mimarisi konularında deneyim kazandım."
      ]
    },
    {
      company: "Nero Endüstri",
      position: "Stajyer",
      period: "2021 - 20 Gün",
      technologies: [],
      description: [
        "Algoritma ve programlama konularında temel bilgiler edindim.",
        "Yazılım geliştirme süreçlerini gözlemleyerek pratik beceriler kazandım."
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.slider-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollPercentage = Math.abs(rect.top) / (section.offsetHeight - window.innerHeight);
      setScrollProgress(Math.min(Math.max(scrollPercentage, 0), 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="slider-section">
      <div className="slider-container">
        <div className="slider-content">
          <h2>Deneyimlerim</h2>
          <div 
            className="slider-track" 
            style={{ 
              transform: `translateX(${-scrollProgress * 100}%)`,
            }}
          >
            {experiences.map((exp, index) => (
              <div 
                key={exp.company} 
                className="slider-card"
                style={{
                  '--index': index,
                  transform: `translateX(${index * 2}rem)`
                }}
              >
                <div className="card-inner">
                  <h3>{exp.company}</h3>
                  <h4>{exp.position}</h4>
                  <p className="period">{exp.period}</p>
                  
                  {exp.technologies.length > 0 && (
                    <div className="technologies">
                      <h4>Teknolojiler:</h4>
                      <div className="tech-tags">
                        {exp.technologies.map(tech => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="description">
                    {exp.description.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="scroll-space" />
    </section>
  );
};

export default ExperienceSlider; 