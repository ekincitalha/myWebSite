import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // About bölümü görünür olduğunda dark mode'u kapat
        if (entry.intersectionRatio > 0.7) {
          document.body.classList.remove('dark-mode');
        }
      },
      {
        threshold: 0.7,
        rootMargin: '-10% 0px'
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
    <section className="about" ref={sectionRef}>
      <h2>Hakkımda</h2>
      <p>
        Yazılım dünyasına olan ilgim, üniversite yıllarında başladı. Kırıkkale 
        Üniversitesi'nde aldığım eğitimle, yazılım geliştirme alanında sağlam bir 
        temel edindim. Java ve React üzerine yoğunlaşarak full stack geliştirme 
        becerilerimi geliştirdim. Hem backend hem de frontend tarafında projeler 
        geliştirdim ve bu süreçte edindiğim deneyimlerle yetkinliklerimi artırdım.
      </p>
    </section>
  );
};

export default About; 