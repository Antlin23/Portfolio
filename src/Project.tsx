import './css/App.css';
import React from 'react';

interface IProject{
    "Title": string,
    "Description": string | undefined,
    "LinkSvg": React.ReactNode,
    "Link": string,
    "LinkText": string | undefined,
    "Image": string | undefined,
    "ToolIcons": { img: string; text: string }[] | undefined 
}

const Project: React.FC<IProject> = ({Title, Description, LinkSvg, Link, LinkText, Image, ToolIcons}) => {
  return (
    <a className='project'href={Link}>
      <img className='project--img' src={Image} alt={Title}></img>

      <div className='project--content'>
        <a className='title orange-link' href={Link}>{Title}</a>
        <div className='project--tools'>
          {ToolIcons?.map((icon, index) => (
            <div className='project--tool'>
              <img key={index} src={icon.img} alt={icon.text} />
              <span>{icon.text}</span>
            </div>
          ))}
        </div>
        <p className='project--description'>{Description}</p>
        <a className='project--link' href={Link}>{LinkText} <i className="fa-solid fa-arrow-right"></i></a>
      </div>
    </a>
  );
}

export default Project;