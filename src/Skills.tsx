import { TypeAnimation } from 'react-type-animation';
import './css/App.css';
import { useState } from 'react';

function Skills({ skillsImportedText }: { skillsImportedText: string }) {
  const [skillsDropdownIsOpen, setskillsDropdownIsOpen] = useState(false);
  const [skillsText, setSkillsText] = useState("");

  const ToggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.remove("wiggle");

    if(skillsDropdownIsOpen){
      setskillsDropdownIsOpen(false);
      setSkillsText("");
    }
    else{
      setskillsDropdownIsOpen(true);
      setSkillsText(skillsImportedText);
    }
  }
  return (
    <section className='skills container fixed'>
        <h3 className='line-divider'>Skills<button onClick={(e) => ToggleDropdown(e)} className={`dropdown wiggle`}><i className={`fa-solid fa-chevron-down ${skillsDropdownIsOpen ? 'rotate-180' : 'rotate-360'}`} style={{ color: "#E0E4E8" }}></i>
        </button></h3>
        <TypeAnimation
        key={skillsText}
            cursor={true}
            speed={85}
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