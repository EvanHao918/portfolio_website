// src/pages/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      name: 'Asynchronous JavaScript',
      description: 'Mastering asynchronous operations using promises, async/await, and various APIs like Fetch and Axios.',
      imgSrc: `${process.env.PUBLIC_URL}/images/async.jpg`
    },
    {
      name: 'TypeScript',
      description: 'Building robust applications with TypeScript, leveraging its strong typing, interfaces, and classes for better maintainability and scalability.',
      imgSrc: `${process.env.PUBLIC_URL}/images/ts.jpg`
    },
    {
      name: 'React',
      description: 'Developing dynamic and responsive web applications using React, including hooks, context API, and advanced state management.',
      imgSrc: `${process.env.PUBLIC_URL}/images/react.jpg`
    }
    // Add more skills as needed
  ];

  return (
    <div className="skills-page">
      <div className="skills-container">
        <h1>My Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              
              <h2>{skill.name}</h2>
              <p>{skill.description}</p>
              <img src={skill.imgSrc} alt={skill.name} className="skill-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
