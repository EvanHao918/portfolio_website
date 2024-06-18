// src/pages/Biography.js
import React from 'react';
import './Biography.css';

const Biography = () => (
  <div className="biography-container">
    <h1>About Me</h1>
    <div className="biography-content">
      <h1>Biography</h1>
      <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="Selfie" className="profile-image" />
      <h2>Hello, I'm Chengshuo</h2>

      <p>Hi, there, I am Chengshuo(Evan) Hao, a current student of Boston University, I am majored in Computer Information System and wish to 
        devote myself into relaitve fields in the future, I emphasize the balance between study and life, working hard to get proficient on the subject while enjoying the 
        lovely lifestyle in Boston is what I am trying to do, looking back to my previous lifetime, I feel those different and interesting experience have shaped me a lot to make me the person how I am,
        if you are intersted, please take a look at my story:
      </p>
      
      <p>I was born in a beautiful place called Miyun, which is a little town with the capital city of China - Beijing, it is famous for the lovely natural views and clean 
        environment, I had a happy time through all my childhood, after that I was like every kid else in China, have to strive for good grades and survive in middle school and high school.
      </p>

      <p>Back to that time when I was preparing the College entrance Exam, I devoted all of my time to study from 7:30AM to 9:30PM each day, but in the end I can't bear the extreme stress and pressure imposed by 
        my family and peers, eventually I did't get the results as I expected and I was stuck in a stuation where I didn't have many choices left,
      </p>

      <p>
        So I had to determine to study a major and school I am not so interested at. I felt all the time that the things they teach are mostly outdated and it will never help with my future career, more 
        is about how to obey the rules and how to deal with the relationship with teachers and officers of different kinds of departments, I felt tired and disappointed of that,
        then I feel it would be good if I study something new here at Boston University. I applied for the program of Computer Information System and was luckly enrolled.
        I was totally new to be a programmer and knew nothing about coding before I came here. But I found myself really like the direction of web devoloping and it let me feel the passion into something again.
        I am so eager to learn more and get more proficient so that I can devote myself into this Area in the future!

      </p>
      </div>
  </div>
);

export default Biography;
