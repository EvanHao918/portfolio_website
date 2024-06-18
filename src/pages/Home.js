// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <h1>Welcome to My Portfolio</h1>
        <h2>Hello, I'm Chengshuo Hao</h2>
        <img src={`${process.env.PUBLIC_URL}/images/selfie.jpg`} className="homepage-image" alt="Selfie" />
        <br/>
        <div className="introduction">
          <p>I'm a passionate web developer with a keen 
            eye for detail and a drive for excellence. With a solid 
            foundation in HTML5, CSS3, JavaScript, TypeScript, and React, 
            I specialize in creating responsive, user-friendly web applications 
            that offer seamless user experiences.</p>
            <br/>
          <p>My journey in web development began with a curiosity for how websites 
            work and has since evolved into a full-fledged career that I love. 
            I enjoy the challenge of solving complex problems and continuously 
            learning new technologies to stay at the forefront of the ever-evolving 
            web development landscape.</p>
            <br/>
          <p>When I'm not coding, you can find me exploring new hobbies, traveling, 
            or spending time with friends and family. I believe in the power of 
            community and love to share my knowledge with others, whether through 
            blogging, mentoring, or contributing to open-source projects.</p>
          </div>
      </div>
    </div>
  );
};

export default Home;
