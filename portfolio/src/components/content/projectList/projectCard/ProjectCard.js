import { useEffect, useState } from 'react';
import './ProjectCard.css';

function ProjectCard(params) {
  const [item, setItem] = useState({title: "", desc: "", img: "", tags: []})
  
  useEffect(() => {
    setItem(params.item)
  }, [])

  return (
    <div className='flex column projectCard'>
        <img src={item.img}></img>
        <div className='flex column desc'>
            <b>{item.title}</b>
            <p>{item.desc}</p>
        </div>
        <div className='flex tags'>
                <b>Java</b>
                <b>React</b>
            </div>
    </div>
  );
}

export default ProjectCard;