import { useState } from 'react';
import './css/App.css';
import { TypeAnimation } from 'react-type-animation';
import RecentProjects from './RecentProjects';

const SlideMenu = ({ skillsImportedText }: { skillsImportedText: string }) => {
  const [skillsText, setSkillsText] = useState(skillsImportedText);

  const showSkills = () => {
    document.querySelector('.skills-slide')?.classList.remove('d-none');
    document.querySelector('.projects-slide')?.classList.add('d-none');
    document.querySelector('.projects-slide')?.classList.remove('show');


    document.querySelector(".nav-slider--skills")?.classList.add("nav-slider--active");
    document.querySelector(".nav-slider--projects")?.classList.remove("nav-slider--active");

    setSkillsText(skillsImportedText);
  }
  const showProjects = () => {
    document.querySelector('.projects-slide')?.classList.remove('d-none');
    document.querySelector('.projects-slide')?.classList.add('show');

    document.querySelector('.skills-slide')?.classList.add('d-none');  

    document.querySelector(".nav-slider--projects")?.classList.add("nav-slider--active");
    document.querySelector(".nav-slider--skills")?.classList.remove("nav-slider--active");

    setSkillsText("");
  }

  return (
      <section>
        <h3 className='line-divider nav-slider'>
          <button className='nav-slider--projects nav-slider--active animated-link' onClick={showProjects}>Recent projects</button>
          <button className='nav-slider--skills animated-link' onClick={showSkills}>Skills</button>
        </h3>

        <div>
          <div className='skills-slide d-none'>
            <TypeAnimation
              key={skillsText}
                  cursor={true}
                  speed={95}
                  sequence={[
                  `${skillsText}`,
                  ]}
                  wrapper="span"
                  style={{ fontSize: '18px', whiteSpace: "pre-line"}}
            />           
          </div>
          <div className='projects-slide'>
                <RecentProjects />
          </div>
        </div>

        
      </section>
  );
}

export default SlideMenu;
