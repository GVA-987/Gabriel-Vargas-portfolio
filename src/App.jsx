import { useState, React } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection'; 
import ProjectSection from './components/ProjectSection/ProjectSection'; 
import SkillsSection from './components/SkillsSection/SkillsSection';  
import ContactSection from './components/ContactSection/ContactSection';
import AboutSection from './components/AboutSection/AboutSection';
import './styles/global.scss'; 

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="page-content">
        <HeroSection id="home"/> 
        <AboutSection id='about'/> 
        <ProjectSection id='projects'/>
        <SkillsSection id='skills'/>
        <ContactSection id='contact'/>
      </main>
    </div>
  );
}

export default App;