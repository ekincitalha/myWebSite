import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "Elzem Bilişim",
      position: "",
      duration: "",
      tech: "C#, .NET, SQL Server",
      description: "",
     // url: "https://www.elzembilisim.com.tr/",
      bgColor: "linear-gradient(135deg, #1a365d 0%, #2d4a7e 100%)",
     // websitePreview: "https://www.elzembilisim.com.tr/",
    
    },
    {
      company: "Mobikap",
      position: "",
      duration: "",
      tech: "Flutter, Dart, Firebase",
      description: "",
     // url: "https://mobikap.com.tr/",
      bgColor: "linear-gradient(135deg, #2d3748 0%, #4a5568 100%)",
    //  websitePreview: "https://mobikap.com.tr/",
   
    },
    {
      company: "TechPro Education",
      position: "Full Stack Developer Stajyer",
      duration: "",
      tech: "Java, Spring Boot, React, PostgreSQL",
      description: "",
     // url: "https://techproeducation.com",
      bgColor: "linear-gradient(135deg, #2C5282 0%, #4299E1 100%)",
     // websitePreview: "https://techproeducation.com",
     
    },
    {
      company: "Innovate Solutions",
      position: "Backend Developer Stajyer",
      duration: "",
      tech: "Java, Spring Boot, MySQL, Docker",
      description: "",
      //url: "https://example.com",
      bgColor: "linear-gradient(135deg, #2D3748 0%, #4A5568 100%)",
      //websitePreview: "https://example.com",
  
    }
  ];

  const handleSiteClick = (url) => {
    window.open(url, '_blank');
  };

  const sectionRef = useRef(null);
  const experienceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('experience-visible');
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20px'
      }
    );

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      experienceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="experience" ref={sectionRef}>
      <h2>My Portfolio</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-item"
            ref={el => experienceRefs.current[index] = el}
          >
            <div className="browser-frame">
              <div className="browser-header">
                <div className="browser-buttons">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div 
                  className="browser-address"
                  onClick={() => handleSiteClick(exp.websitePreview)}
                  style={{ cursor: 'pointer' }}
                >
                  <span>{exp.url}</span>
                </div>
              </div>
              <div className="browser-content" style={{ background: exp.bgColor }}>
                <div className="website-preview" onClick={() => handleSiteClick(exp.websitePreview)}>
                  <iframe 
                    src={exp.websitePreview} 
                    title={exp.company}
                    className="preview-iframe"
                  />
                 
                </div>
                <div className="content-scroll">
                  <div className="experience-header-content">
                    <h3>{exp.company}</h3>
                
                  </div>
                  <div className="experience-details">
                    <p className="position">{exp.position}</p>
                    <div className="tech-tags">
                      {exp.tech.split(', ').map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <p className="description">{exp.description}</p>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 