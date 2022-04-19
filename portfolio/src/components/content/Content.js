import './Content.css';
import ProjectList from './projectList/ProjectList';
import Sidebar from './sidebar/Sidebar';

function Content() {
  return (
    <div className='content'>
        <div className='flex projects'>
        <Sidebar/>
        <ProjectList/>
        </div>
    </div>
  );
}

export default Content;