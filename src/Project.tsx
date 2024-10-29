import './App.css';
import React from 'react';

interface IProject{
    "Title": string,
    "Description": string | undefined,
    "LinkSvg": React.ReactNode,
    "Link": string,
    "LinkText": string | undefined,
    "Image": string | undefined,
    "ToolIcons": string[] | undefined 
}

const Project: React.FC<IProject> = ({Title, Description, LinkSvg, Link, LinkText, Image, ToolIcons}) => {
  return (
    <div className='project'>
      <img className='project--img' src={Image} alt={Title}></img>

      <div className='project--content'>
        <a className='title orange-link' href={Link}>{Title}</a>
        <div className='project--tools'>
          {ToolIcons?.map((icon, index) => (
              <img key={index} className='project--tool' src={icon} alt={`Tool icon ${index}`} />
          ))}
        </div>
        <p className='project--description'>{Description}</p>
        <a href={Link}>{LinkText} {LinkSvg}</a>
      </div>
    </div>
  );
}

export default Project;