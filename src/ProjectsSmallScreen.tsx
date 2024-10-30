import './css/App.css';
import RecentProjects from './RecentProjects';

const ProjectsSmallScreen = () => {
  return (
      <section id='projects'>
        <h3 className='line-divider'>Recent projects</h3>

        <RecentProjects />
      </section>
  );
}

export default ProjectsSmallScreen;
