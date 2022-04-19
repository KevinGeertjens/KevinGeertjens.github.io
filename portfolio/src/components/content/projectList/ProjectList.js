import './ProjectList.css';
import ProjectCard from './projectCard/ProjectCard';

function ProjectList() {

let items = [
    {title: "Mountains", desc: "A very cool mountain app", img: "/assets/img/placeholders/4.jpg"},
    {title: "Space He Bo", desc: "In space, no one can hear you spam", img: "/assets/img/placeholders/2.jpg"},
    {title: "Blue Vibes", desc: "Just. Straight up. Vibin'", img: "/assets/img/placeholders/3.jpg"},
    {title: "Night City", desc: "Lmao cyberpunk 2077 is doodoo water", img: "/assets/img/placeholders/1.jpg"}
]

  return (
    <div className='flex column projectList'>
        <div className='flex searchbarContainer'>
            <input type='text' id='search' placeholder='Search through projects'></input>
        </div>
        <div className='list'>
            {items.map((item, index) => {
                return <ProjectCard item={item} key={index}/>
            })}
        </div>
    </div>
  );
}

export default ProjectList;