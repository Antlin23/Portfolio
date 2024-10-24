import './App.css';
import Introduction from './Introduction';
import Menu from './Menu';
import Projects from './Projects';
import Skills from './Skills';

function App() {
  return (
    <div className='content'>
      <section className='content--grid container'>
        <Introduction />
        <Projects />
        <div className='content-skills'>
          <Skills />
        </div>
      </section>
      <footer className='fixed container'>Made by <span className='footer-bold'>Anton</span> <span className='orange-color'>|</span> 2024</footer>
      <Menu />
    </div>
  );
}

export default App;