import './App.css';
import Ghost from './Ghost';
import Introduction from './Introduction';
import Menu from './Menu';
import Projects from './ProjectsSmallScreen';
import ProjectsSlide from './SlideMenu';
import Skills from './Skills';

function App() {

  return (
    <div className='content'>
      <Ghost />

      <section className='content--grid container'>
        <Introduction />
        <div className='large-screen' id='projects'>
          <ProjectsSlide />
        </div>
        <div className='small-screen'>
          <Projects />
          <Skills />
        </div>
      </section>

      <footer className='fixed container'>Made by <span className='footer-bold'>Anton</span> <span className='orange-color'>|</span> 2024</footer>
      <Menu />
    </div>
  );
}

export default App;