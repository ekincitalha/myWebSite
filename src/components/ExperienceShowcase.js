import React, { useState, useEffect } from 'react';
import '../styles/ExperienceShowcase.css';

const ExperienceShowcase = () => {
  const [activeExp, setActiveExp] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      company: "BTGM",
      role: "Full-Stack Developer",
      period: "2022 - Present",
      description:"Web tabanlı kurumsal uygulamalar geliştiriyorum. Backend ve frontend süreçlerinde aktif rol alıyorum. Yazılım geliştirme yaşam döngüsünün her aşamasına dahil olup, gereksinim analizinden tasarım ve kodlamaya kadar birçok süreçte yer alıyorum. Sürekli iyileştirme sağlamak amacıyla Agile metodolojisini benimsiyorum. Takım içinde efektif bir işbirliği sağlayarak, kullanıcı dostu ve yüksek performanslı uygulamalar geliştiriyorum." ,
      skills: ["Java", "Spring Boot", "React", "PostgreSQL"],
      color: "#60a5fa"
    },
    {
      company: "Kalemzen",
      role: "Flutter Developer Intern",
      period: "2022-2022",
      description: "Mobil uygulama geliştirme ve UI/UX tasarım süreçlerinde deneyim kazandım. Flutter ile Android platform için yüksek performanslı ve görsel olarak etkileyici mobil uygulamalar geliştirdim. Kullanıcı odaklı tasarım yaparak, kullanıcı geri bildirimlerini dikkate alarak uygulamaların performansını ve deneyimini sürekli iyileştirdim.",
      skills: ["Flutter", "Dart", "Firebase"],
      color: "#34d399"
    },
    {
      company: "Nero",
      role: "Software Developer Intern",
      period: "2021-2021",
      description: "Algoritma ve programlama konularında temel beceriler edindim. Yazılım geliştirme süreçlerine yönelik mentorluk aldım, veri yapıları ve algoritmalar üzerine çalışarak problem çözme yeteneklerimi geliştirdim. Ayrıca yazılım projelerinde kod yazma ve hata ayıklama gibi görevlerde yardımcı oldum.",
      skills: ["Algorithms", "Programming"],
      color: "#f472b6"
    }
  ];

  return (
    <div className={`experience-showcase ${isVisible ? 'visible' : ''}`}>
      <div className="experience-content">
        <div className="experience-header">
          <h2>Deneyimlerim</h2>
          <div className="header-line"></div>
        </div>
        
        <div className="experience-grid">
          <div className="company-list">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`company-item ${index === activeExp ? 'active' : ''}`}
                onClick={() => setActiveExp(index)}
                style={{
                  '--accent-color': exp.color,
                  '--delay': `${index * 0.1}s`
                }}
              >
                <div className="company-item-content">
                  <span className="company-name">{exp.company}</span>
                  <span className="company-period">{exp.period}</span>
                </div>
                <div className="company-item-indicator"></div>
              </button>
            ))}
          </div>

          <div className="details-container">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`experience-details ${index === activeExp ? 'active' : ''}`}
                style={{ '--accent-color': exp.color }}
              >
                <div className="role-header">
                  <h3>{exp.role}</h3>
                  <span className="company-tag">{exp.company}</span>
                </div>
                <p className="description">{exp.description}</p>
                
                <div className="skills-list">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skill} 
                      className="skill-tag"
                      style={{ '--delay': `${skillIndex * 0.1}s` }}
                    >
                      {skill}
                    </span>
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