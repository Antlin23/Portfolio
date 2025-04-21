import './css/App.css';
import Ghost from './Ghost';
import Introduction from './Introduction';
import Menu from './Menu';
import Projects from './ProjectsSmallScreen';
import ProjectsSlide from './SlideMenu';
import Skills from './Skills';
import { useState, useEffect } from 'react';

function App() {

  const [skillsText, setSkillsText] = useState("");

  useEffect(() => {
    setSkillsText("• ASP.NET Core\n• C# & Java\n• JavaScript & TypeScript\n• Tailwind & Bootstrap\n• React.js\n• HTML & CSS\n• SQL\n• EpiServer & Umbraco\n• API\n• WCAG & accessibility\n• Entity framework");
  }, [])
  

  return (
    <div className='content'>

      <section className='content--grid container'>
        <Introduction />
        <div className='large-screen' id='projects'>
          <ProjectsSlide skillsImportedText={skillsText}/>
        </div>
        <div className='small-screen'>
          <Projects />
          <Skills skillsImportedText={skillsText}/>
        </div>

        <footer className='footer fixed container'>Made by <span className='footer-bold'>Anton</span> <span className='orange-color'>|</span> 2025</footer>
      </section>

      <Menu />
    </div>
  );
}

export default App;