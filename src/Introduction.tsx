import { TypeAnimation } from 'react-type-animation';
import './App.css';

function Introduction() {
  return (
    <>
      <section className='introduction'>
          <TypeAnimation
          sequence={[
            1300,
          'Hello, I am Anton!',
          1000,
          'Hello, I am Anton!\nThanks for visiting my page!',
          ]}
          wrapper="div"
          cursor={true}
          style={{ fontSize: '48px', fontWeight: "700", whiteSpace: "pre-line"}}
        />    
         
        <h2>Software developer from Sweden</h2>
        <p className='description'>Ever since I was a kid, my passion for gaming sparked a deeper interest in computers and programming. I pursued game development for three years in high school, which laid a solid foundation for my continued journey into .NET web development.</p>
        <p>In my spare time, I enjoy working on game and app projects. You can explore some of my work on <a className='github-link' href='https://github.com/Antlin23?tab=repositories'>GitHub!</a>
        </p>
        <p>Feel free to reach out!</p>
      </section>
    </>
  );
}

export default Introduction;
