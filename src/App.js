import React from 'react';
import './App.css';
import { Header, Navigation,  Skills,  Experience, Footer } from './components';

function App() {
  return (
    <div className="app">
      <Navigation />
      <div style={{ paddingTop: '70px' }}>
        <Header />
        <main>
        
          <section id="skills">
            <Skills />
          </section>
      
          <section id="experience">
            <Experience />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
