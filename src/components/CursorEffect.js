import React, { useEffect, useState } from 'react';
import './CursorEffect.css';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const trailLength = 8;

  useEffect(() => {
    let rafId;
    
    const handleMouseMove = (e) => {
      rafId = requestAnimationFrame(() => {
        const newPosition = { 
          x: e.pageX,  // clientX yerine pageX kullanıyoruz
          y: e.pageY   // clientY yerine pageY kullanıyoruz
        };
        setPosition(newPosition);
        
        setTrail(prevTrail => {
          const newTrail = [newPosition, ...prevTrail];
          return newTrail.slice(0, trailLength);
        });
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setTrail([]);
    };

    // Hover efekti için
    const handleElementHover = () => setIsHovering(true);
    const handleElementLeave = () => setIsHovering(false);

    const headerElement = document.querySelector('.header');
    const interactiveElements = document.querySelectorAll('a, button, .tech-item, .social-btn');
    
    if (headerElement) {
      document.addEventListener('mousemove', handleMouseMove);
      headerElement.addEventListener('mouseenter', handleMouseEnter);
      headerElement.addEventListener('mouseleave', handleMouseLeave);

      // Hover dinleyicileri
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', handleElementHover);
        element.addEventListener('mouseleave', handleElementLeave);
      });

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        headerElement.removeEventListener('mouseenter', handleMouseEnter);
        headerElement.removeEventListener('mouseleave', handleMouseLeave);
        
        interactiveElements.forEach(element => {
          element.removeEventListener('mouseenter', handleElementHover);
          element.removeEventListener('mouseleave', handleElementLeave);
        });
        
        if (rafId) cancelAnimationFrame(rafId);
      };
    }
  }, []);

  return (
    <>
      {trail.map((pos, index) => (
        <div
          key={index}
          className={`cursor-trail ${isVisible ? 'visible' : ''}`}
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: 1 - (index / trailLength),
          }}
        />
      ))}
      <div 
        className={`cursor-effect ${isVisible ? 'visible' : ''} ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className="cursor-inner" />
      </div>
    </>
  );
};

export default CursorEffect; 