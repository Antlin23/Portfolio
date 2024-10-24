import './App.css';
import React from 'react';

interface IProject{
    "Title": string,
    "Description": string | undefined,
    "LinkSvg": React.ReactNode,
    "Link": string,
    "LinkText": string | undefined
}

const Project: React.FC<IProject> = ({Title, Description, LinkSvg, Link, LinkText}) => {
  return (
    <div className='project'>
        <a className='title orange-link' href={Link}>{Title}</a>
        <p>{Description}</p>
        <a href={Link}>{LinkText} {LinkSvg}</a>
    </div>
  );
}

export default Project;