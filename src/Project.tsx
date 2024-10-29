import './App.css';
import React from 'react';

interface IProject{
    "Title": string,
    "Description": string | undefined,
    "LinkSvg": React.ReactNode,
    "Link": string,
    "LinkText": string | undefined,
    "Image": string | undefined
}

const Project: React.FC<IProject> = ({Title, Description, LinkSvg, Link, LinkText, Image}) => {
  return (
    <div className='project'>
      <img src={Image}></img>

      <div className='project--content'>
        <a className='title orange-link' href={Link}>{Title}</a>
        <p>{Description}</p>
        <a href={Link}>{LinkText} {LinkSvg}</a>
      </div>
    </div>
  );
}

export default Project;