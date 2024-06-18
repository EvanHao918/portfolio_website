// src/pages/Interests.js
import React from 'react';
import './Interests.css';

const Interests = () => (
  
      <div className="interests-container">
        <h1>My Interests</h1>
        <h2>Set apart the course work in school, I am also a positove and outgoing person who has various hobbies in daily life,
          which is so important because they can get me relaxed when I am anxious and raise me up when I am feeling down.
          I play basketball for many years, it is the favorite way to get my body worked out. Besides, I'm also a starter in skiing,
          the first time I tried it was on the Thanksgiving days of the first year when I got here in Boston, it is really a challenging sport and,
          much more difficult than I expected before even though I have the basis of skateboarding. In regular days I would also like to hang out with my friend
          or play some video games together.
        </h2>
        <div className="interest">
          <h2>Basketball</h2>
          <img src={`${process.env.PUBLIC_URL}/images/basketball.jpg`} alt="Basketball" className="interest-image" />
          <p>Basketball is my favorite sport. I love the thrill of the game and the team spirit it fosters.</p>
        </div>
        <div className="interest">
          <h2>Skiing</h2>
          <img src={`${process.env.PUBLIC_URL}/images/skiing.jpg`} alt="Skiing" className="interest-image" />
          <p>Skiing down snowy mountains is exhilarating. It's a perfect blend of speed and nature.</p>
        </div>
        <div className="interest">
          <h2>Skateboarding</h2>
          <img src={`${process.env.PUBLIC_URL}/images/skateboarding.jpg`} alt="Skateboarding" className="interest-image" />
          <p>Skateboarding is all about balance and creativity. It allows me to express myself in unique ways.</p>
        </div>
      </div>
);

export default Interests;
