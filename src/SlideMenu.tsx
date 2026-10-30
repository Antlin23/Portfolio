import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import RecentProjects from './RecentProjects';
import Certificates from './Certificates';

const SlideMenu = ({ skillsImportedText }: { skillsImportedText: string }) => {
  const [skillsText, setSkillsText] = useState("");
  const [animationRun, setAnimationRun] = useState(0);
  const [certificatesVisible, setCertificatesVisible] = useState(false);

  const showSkills = () => {
    document.querySelector('.skills-slide')?.classList.remove('d-none');
    document.querySelector('.projects-slide')?.classList.add('d-none');
    document.querySelector('.projects-slide')?.classList.remove('show');


    document.querySelector(".nav-slider--skills")?.classList.add("nav-slider--active");
    document.querySelector(".nav-slider--projects")?.classList.remove("nav-slider--active");

    setCertificatesVisible(false);
    setAnimationRun((run) => run + 1);
    setSkillsText(skillsImportedText);
  }
  const showProjects = () => {
    document.querySelector('.projects-slide')?.classList.remove('d-none');
    document.querySelector('.projects-slide')?.classList.add('show');

    document.querySelector('.skills-slide')?.classList.add('d-none');  

    document.querySelector(".nav-slider--projects")?.classList.add("nav-slider--active");
    document.querySelector(".nav-slider--skills")?.classList.remove("nav-slider--active");

    setCertificatesVisible(false);
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
            {skillsText && <TypeAnimation
              key={`${skillsText}-${animationRun}`}
              cursor={true}
              speed={95}
              sequence={[
                skillsText,
                () => setCertificatesVisible(true),
              ]}
              wrapper="span"
              style={{ fontSize: '18px', whiteSpace: "pre-line"}}
            />}
            {certificatesVisible && <Certificates />}
          </div>
          <div className='projects-slide'>
                <RecentProjects />
          </div>
        </div>

        
      </section>
  );
}

export default SlideMenu;
