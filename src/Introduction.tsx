import './App.css';

function Introduction() {
  return (
    <>
      <section className='container'>
        <div id="msg"/>
        <h1>Hello, I am <span className='title-span'>Anton!</span><br></br>Thanks for visiting my page!</h1>
        <h2>Software developer from Sweden</h2>
        <p className='description'>Ever since I was a kid, my passion for gaming sparked a deeper interest in computers and programming. I pursued game development for three years in high school, which laid a solid foundation for my continued journey into .NET web development.</p>
        <p>In my spare time, I enjoy working on game and app development projects. You can explore some of my work on <a className='github-link' href='https://github.com/Antlin23?tab=repositories'>GitHub!</a>
        </p>
        <p>Feel free to reach out!</p>
      </section>
    </>
  );
}

export default Introduction;
