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
        <p className='description'>I pursued game development in high school, which laid a solid foundation for my continued journey into .NET and Java web development.</p>
        <p>In my spare time, I also work on applications. You can explore some of my work on <a className='animated-link orange-link' href='https://github.com/Antlin23?tab=repositories'>GitHub!</a>
        </p>
      </section>
  );
}

export default Introduction;