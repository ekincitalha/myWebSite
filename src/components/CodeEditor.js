import React, { useState, useEffect } from 'react';
import './CodeEditor.css';

const CodeEditor = () => {
  const [text, setText] = useState('');
  const codeSnippet = `
{
  name: "Talha Ekinci",
  role: "Developer",
  tech: [
    "React",
    "Java",
    "PostgreSQL",
  ],
  edu: "Kirikkale University"
  rank:"1"
}`.trim();

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(codeSnippet.slice(0, index));
      index++;
      if (index > codeSnippet.length) {
        clearInterval(timer);
        setTimeout(() => {
          index = 0;
          setText('');
          startTyping();
        }, 3000);
      }
    }, 50);

    const startTyping = () => {
      const newTimer = setInterval(() => {
        setText(codeSnippet.slice(0, index));
        index++;
        if (index > codeSnippet.length) {
          clearInterval(newTimer);
          setTimeout(() => {
            index = 0;
            setText('');
            startTyping();
          }, 3000);
        }
      }, 50);
    };

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="code-editor">
      <div className="editor-header">
        <div className="dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="tab">developer.js</div>
      </div>
      <div className="editor-content">
        <div className="line-numbers">
          {text.split('\n').map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <pre>
          <code>{text}</code>
        </pre>
        <div className="cursor">|</div>
      </div>
    </div>
  );
};

export default CodeEditor; 