// src/pages/Resume.js
import React from 'react';
import './Resume.css';



const Resume = () => {
  return (
    <div className="app-">
      <div className="resume-container">
        <h1>Chengshuo Hao</h1>
        <a href="/resume.pdf" download className="download-button">Download Resume</a>
        <p className="contact-info">
          <a href="mailto:chengsh@bu.edu">chengsh@bu.edu</a> | 857-272-6092<br />
          Boston, MA 02215
        </p>
        
        
        <section className="section">
          <h2>Professional Summary</h2>
          <p>
            A passionate internship job-seeker who is also a current graduated student wishes to have
            an opportunity to devote to a new career as a Front-End UI Developer, equipped with
            diverse programming languages and skills, experienced with cutting-edge development
            tools and procedures. Able to effectively self-manage during independent projects, as well
            as collaborate as a member of a productive team.
          </p>
        </section>
        
        <section className="section">
          <h2>Skills</h2>
          <ul>
            <li>Experienced with HTML, CSS</li>
            <li>Proficient in Python programming skills</li>
            <li>Knowledge in software logic</li>
            <li>Familiar with Agile development management</li>
            <li>Adaptability</li>
          </ul>
        </section>
        
        <section className="section">
          <h2>Professional Experience</h2>
          <h3>Courseworks</h3>
          <ul>
            <li>
              <strong>Online-Training Website Front End Design:</strong> Using Axure to build websites providing online-training courses and certificates under SCRUM management framework as a developer in a development team, responsible for collaborating with UI design and realizing different functions of the websites according to the requirements.
            </li>
            <li>
              <strong>Personal Python Project:</strong> Using Visual Studio Code to create a student information system with Python, implementing functions such as adding and removing, searching, and viewing information of the students, GPA calculation, etc.
            </li>
            <li>
              <strong>Database Project:</strong> Using mySQL to build a database aimed at running a college management system, specifically recording the students' information including ID and grades, the arrangement of courses and classrooms used for each semester.
            </li>
          </ul>
        </section>
        
        <section className="section">
          <h2>Education</h2>
          <p>
            Expected in 12/2024<br />
            Boston University - Boston, MA<br />
            Master of Science: Computer Information Systems
          </p>
        </section>
        
        <section className="section">
          <h2>Languages</h2>
          <ul>
            <li>English - Professional Working</li>
            <li>Chinese (Mandarin) - Native or Bilingual</li>
          </ul>
        </section>

        
      </div>
    </div>
  );
};

export default Resume;
