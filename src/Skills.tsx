import { TypeAnimation } from 'react-type-animation';
import './App.css';
import { useEffect, useState } from 'react';

function Skills() {
  const [skillsDropdownIsOpen, setskillsDropdownIsOpen] = useState(false);
  const [skillsText, setSkillsText] = useState("");

  const ToggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);

    e.currentTarget.classList.remove("wiggle");

    if(skillsDropdownIsOpen){
      setskillsDropdownIsOpen(false);
      setSkillsText("");
    }
    else{
      setskillsDropdownIsOpen(true);
      setSkillsText("• ASP.NET Core\n• C#\n• JavaScript & TypeScript\n• Tailwind & Bootstrap\n• React.js\n• SQL\n• EpiServer & Umbraco\n• Azure DevOps\n• API\n• WCAG & accessibility\n• Flutter & Dart");
    }
  }
  return (
    <section className='skills container fixed'>
        <h3 className='line-divider'>Skills<button onClick={(e) => ToggleDropdown(e)} className={`dropdown wiggle`}><i className={`fa-solid fa-chevron-down ${skillsDropdownIsOpen ? 'rotate-180' : 'rotate-360'}`} style={{ color: "#ffffff" }}></i>
        </button></h3>
        <TypeAnimation
        key={skillsText}
            cursor={true}
            speed={75}
            sequence={[
            `${skillsText}`,
            ]}
            wrapper="span"
            style={{ fontSize: '18px', whiteSpace: "pre-line"}}
        /> 
    </section>
  );
}

export default Skills;