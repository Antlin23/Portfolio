import { TypeAnimation } from 'react-type-animation';
import './App.css';
import Skills from './Skills';

function Introduction() {

  const CLASS_NAME = 'typetext';
  return (
      <section className='introduction grid-item1 fixed'>
        <div className='introduction--title'>
          <TypeAnimation
            cursor={false}
            className={CLASS_NAME}
            sequence={[
              300, 
              'Hello, I am ',
            ]}
            wrapper="span"
            style={{ fontSize: '46px', fontWeight: "700", whiteSpace: "pre-line"}}
          />    

          <TypeAnimation
            sequence={[
              1200, 
              'Anton!',
            ]}
            wrapper="span"
            cursor={false}
            className={CLASS_NAME}
            style={{ fontSize: '46px', fontWeight: "700", whiteSpace: "pre-line", color:"#FF6500"}}
          />    
          <TypeAnimation
            sequence={[
              2000,
              'Thanks for visiting my page!',
            ]}
            wrapper="div"
            cursor={false}
            className={CLASS_NAME}
            style={{ fontSize: '46px', fontWeight: "700", whiteSpace: "pre-line"}}
          />  
        </div>
         
        <h2>Software developer from Sweden</h2>
        <p className='description'>Ever since I was a kid, my passion for gaming sparked a deeper interest in computers and programming. I pursued game development in high school, which laid a solid foundation for my continued journey into .NET web development.</p>
        <p>In my spare time, I enjoy working on game and app projects. You can explore some of my work on <a className='orange-link' href='https://github.com/Antlin23?tab=repositories'>GitHub!</a>
        </p>
        <p>Feel free to reach out!</p>

        <div className='intro-skills'>
          <Skills />
        </div>
      </section>
  );
}

export default Introduction;