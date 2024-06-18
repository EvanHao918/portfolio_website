// src/components/SkillCard.js
import React from 'react';

const SkillCard = ({ skill }) => (
  <div className="skill-card">
    <h3>{skill.name}</h3>
    <p>{skill.description}</p>
  </div>
);

export default SkillCard;
