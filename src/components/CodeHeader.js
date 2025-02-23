import React, { useState, useEffect } from 'react';
import './CodeHeader.css';

const CodeHeader = () => {
  const [text, setText] = useState('');
  const [activeTab, setActiveTab] = useState('portfolio');

  const tabs = {
    portfolio: `
// Portfolio.js

const developer = {
  name: 'Talha Ekinci',
  title: 'Full Stack Developer',
  skills: {
    backend: ['Java','C#','Python'],
    frontend: ['React','JavaScript', 'HTML', 'CSS',],
    mobile: ['Flutter'],
    database: ['PostgreSQL', 'MySQL','MsSQL'],
    technologies: ['Git', 'Docker', 'Redis','Kafka','Kubernetes']
  },
};

`.trim(),

    about: `
// About.js

const about = {
  summary: 'I am a passionate Computer Engineer loving increasing my knowledge and never stop learning!',
  experience: [
  {
    company: 'Ministry of Treasury And Finance',
    position: 'Software Developer',
    duration: '2022-',
  },
  {
    company: 'Kalemzen Yazilim',
    position: 'Intern Mobile Developer',
    duration: '2021-2022',
  },
  {
    company: 'Nero Industry',
    position: 'Intern Software Developer',
    duration: '2020-2021',
  }
  ],
  education:{
    university: 'Kirikkale University',
    degree: 'Computer Engineering',
    gpa: 3.63,
    rank: 1
  },
  languages: {
    Turkish: 'Native',
    English: 'B2'
  },
  exams: [
    {
      name: 'YDS',
      score: 68,
    }
  ]
  hobbies: [
    'Coding',
    'Technology',
    'Problem Solving'
  ]
};`.trim(),

    contact: `
// Contact.js

const contact = {
    email: 'stlmstalha@gmail.com',
    github: 'github.com/ekincitalha',
    linkedin: 'https://www.linkedin.com/in/talha-ekinci-724b801b2/',
    location: 'Turkiye',
    status: 'Open to new opportunities'
   // Feel free to contact me!

};`.trim()
  };

  useEffect(() => {
    let index = 0;
    const currentText = tabs[activeTab];
    
    const timer = setInterval(() => {
      setText(currentText.slice(0, index));
      index++;
      if (index > currentText.length) {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setText('');
  };

  return (
    <div className="code-header">
      <div className="editor-tabs">
        <div 
          className={`tab ${activeTab === 'portfolio' ? 'active' : ''}`}
          onClick={() => handleTabClick('portfolio')}
        >
          Portfolio.js
        </div>
        <div 
          className={`tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => handleTabClick('about')}
        >
          About.js
        </div>
        <div 
          className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => handleTabClick('contact')}
        >
          Contact.js
        </div>
      </div>
      <div className="editor-main">
        <div className="editor-gutter">
          {text.split('\n').map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <div className="editor-content">
          <pre>
            <code>{text}</code>
          </pre>
        </div>
      </div>
      <div className="editor-footer">
        <span>JavaScript</span>
        <span>UTF-8</span>
        <span>LF</span>
      </div>
    </div>
  );
};

export default CodeHeader; 