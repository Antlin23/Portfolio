import './App.css';
import Introduction from './Introduction';
import Menu from './Menu';
import Projects from './Projects';
import Skills from './Skills';

function App() {
  return (
    <div className='content'>
      
      <svg id="themeIcon2" fill="#fff" height="200px" width="200px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="#fff">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <path d="M256.367,0C145.921-0.198,55.559,91.711,55.559,202.158v276.435c0,14.88,17.992,22.334,28.515,11.81l38.299-38.299 l55.002,55.002c6.523,6.523,17.099,6.523,23.622,0L256,452.105l55.002,55.002c6.523,6.523,17.099,6.523,23.622,0l55.003-55.002 l38.299,38.299c10.523,10.523,28.515,3.07,28.515-11.81V200.441C456.441,89.862,366.899,0.199,256.367,0z M423.034,438.274 l-21.595-21.596c-6.523-6.523-17.099-6.523-23.622,0l-55.002,55.002l-55.003-55.002c-6.523-6.523-17.099-6.523-23.622,0 l-55.002,55.002l-55.003-55.002c-6.523-6.523-17.099-6.523-23.622,0l-21.595,21.595V202.058h-0.001 c0-92.33,74.231-168.391,166.56-168.65c92.32-0.257,167.508,74.768,167.508,167.034V438.274z"></path>
          </g>
        </g>
        <g>
          <g>
            <path id="leftEye" d="M172.483,167.034c-27.632,0-50.11,22.478-50.11,50.11s22.478,50.11,50.11,50.11c27.632,0,50.11-22.478,50.11-50.11 S200.115,167.034,172.483,167.034z M172.483,233.848c-9.225,0-16.703-7.479-16.703-16.703s7.479-16.703,16.703-16.703 c9.225,0,16.703,7.479,16.703,16.703S181.708,233.848,172.483,233.848z"></path>
          </g>
        </g>
        <g>
          <g>
            <path d="M339.517,167.034c-27.632,0-50.11,22.478-50.11,50.11s22.478,50.11,50.11,50.11c27.632,0,50.11-22.478,50.11-50.11 S367.149,167.034,339.517,167.034z M339.517,233.848c-9.225,0-16.703-7.479-16.703-16.703s7.479-16.703,16.703-16.703 c9.225,0,16.703,7.479,16.703,16.703S348.741,233.848,339.517,233.848z"></path>
          </g>
        </g>
      </g>
    </svg>
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