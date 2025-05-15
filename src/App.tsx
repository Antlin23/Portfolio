import './css/App.css';
import Ghost from './Ghost';
import Introduction from './Introduction';
import Menu from './Menu';
import Projects from './ProjectsSmallScreen';
import ProjectsSlide from './SlideMenu';
import Skills from './Skills';
import { useState, useEffect } from 'react';
import MouseEffect from './components/MouseEffect';
import bgImage from './images/rndomCode2.png';

function App() {
  const [skillsText, setSkillsText] = useState("");

  useEffect(() => {
    setSkillsText("• ASP.NET Core\n• C# & Java\n• JavaScript & TypeScript\n• Tailwind & Bootstrap\n• React.js\n• HTML & CSS\n• SQL\n• EpiServer & Umbraco\n• API\n• WCAG & accessibility\n• Entity framework");
  }, [])
  
  return (
    <div className='content' style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      position: 'relative',
    }}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}>
        <MouseEffect />
      </div>

      <section className='content--grid container' style={{
        position: 'relative',
        zIndex: 1,
        backgroundColor: 'transparent',
      }}>
        <Introduction />

        <div className='large-screen project-skils-section' id='projects'>
          <ProjectsSlide skillsImportedText={skillsText}/>
        </div>

        <div className='small-screen project-skils-section'>
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