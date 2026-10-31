import { TypeAnimation } from 'react-type-animation';
import './css/App.css';

function Introduction() {

  const CLASS_NAME = 'typetext';
  return (
      <section className='introduction grid-item1 fixed'>
        <div className='introduction--title'>
          <TypeAnimation
            cursor={false}
            className={CLASS_NAME}
            sequence={[
              'Hello, I am ',
            ]}
            wrapper="span"
            speed={55}
            style={{ fontSize: '46px', fontWeight: "700", whiteSpace: "pre-line"}}
          />    

          <TypeAnimation
            sequence={[
              700, 
              'Anton!',
            ]}
            wrapper="span"
            cursor={false}
            speed={55}
            className={CLASS_NAME}
            style={{ fontSize: '46px', fontWeight: "700", whiteSpace: "pre-line", color:"#FF6500"}}
          />    
          <TypeAnimation
            sequence={[
              1200,
              'Thanks for visiting my page!',
            ]}
            wrapper="div"
            cursor={false}
            speed={55}
            className={CLASS_NAME}
            style={{ fontSize: '46px', fontWeight: "700", whiteSpace: "pre-line", marginTop: "0.8rem"}}
          />  
        </div>
         
        <h2>Software developer from Sweden</h2>

        <p className='description'>I focus on continuous learning and delivering with high standards while adapting to the user's needs.</p>
        <p>I have expertise in complex microservices architecture using modern technologies. My focus has mainly been full-stack Java, Spring Boot, and Angular microservices with CI/CD workflows.</p>
        <p>I have also worked with a broad range of other technologies like .NET Core, Flutter, C#, and Lua.</p>
        
        <p>Feel free to explore some of my hobby projects on <a className='animated-link orange-link' href='https://github.com/Antlin23?tab=repositories'>GitHub.</a></p>

      </section>
  );
}

export default Introduction;