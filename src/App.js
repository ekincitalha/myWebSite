import React from 'react';
import './App.css';
import { Header, Navigation,  Skills,  Experience, Footer } from './components';
import ExperienceSlider from './components/ExperienceSlider';
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
        <section id="experience">
          <ExperienceShowcase />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
