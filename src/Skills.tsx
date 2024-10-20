import { TypeAnimation } from 'react-type-animation';
import './App.css';

function Skills() {
  return (
    <section className='skills container fixed'>
        <h3 className='line-divider'>Skills</h3>
        <TypeAnimation
            cursor={true}
            speed={75}
            sequence={[
            1000, 
            "• ASP.NET Core\n• C#\n• JavaScript & TypeScript\n• Tailwind & Bootstrap\n• React.js\n• SQL\n• EpiServer & Umbraco\n• Azure DevOps\n• API\n• WCAG & accessibility\n• Flutter & Dart",
            ]}
            wrapper="span"
            style={{ fontSize: '18px', whiteSpace: "pre-line"}}
        /> 
    </section>
  );
}

export default Skills;
