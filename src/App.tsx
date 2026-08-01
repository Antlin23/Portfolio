import './css/App.css';
import Ghost from './Ghost';
import Introduction from './Introduction';
import Menu from './Menu';
import Projects from './ProjectsSmallScreen';
import ProjectsSlide from './SlideMenu';
import Skills from './Skills';
import { useState, useEffect } from 'react';
import MouseEffect from './MouseEffect';

function App() {
  const [skillsText, setSkillsText] = useState("");

  useEffect(() => {
    setSkillsText("• ASP.NET Core\n• C# & Java\n• JavaScript & TypeScript\n• Tailwind & Bootstrap\n• React.js & Angular\n• HTML & CSS\n• SQL\n• EpiServer & Umbraco\n• REST API\n• WCAG & accessibility\n• Entity framework");
  }, [])
  
  return (
    <div className='content'>
      <div className='content-background'>
        <MouseEffect />
      </div>

      <section className='content--grid container'>
        <Introduction />

        <div className='large-screen project-skils-section' id='projects'>
          <ProjectsSlide skillsImportedText={skillsText}/>
        </div>

        <div className='small-screen project-skils-section'>
          <Projects />
          <Skills skillsImportedText={skillsText}/>
        </div>

        <footer className='footer fixed container'>Made by <span className='footer-bold'>Anton</span> <span className='orange-color'>|</span> 2026</footer>
      </section>

      <Menu />
    </div>
  );
}

export default App;