import './App.css';
import Introduction from './Introduction';
import Projects from './Projects';

function App() {
  return (
    <div className='content'>
      <section className='introduction-projects container'>
        <Introduction />
        <Projects />
      </section>
        <footer>Made by Anton <span className='orange-color'>|</span> 2024</footer>
    </div>
  );
}

export default App;