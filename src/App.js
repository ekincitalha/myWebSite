import React from 'react';
import './App.css';
import { Header, Navigation, Skills, Footer } from './components';
import ExperienceShowcase from './components/ExperienceShowcase';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Header />
        <section id="skills">
          <Skills />
        </section>
        <section id="showcase-section" className="showcase-section">
          <ExperienceShowcase />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
