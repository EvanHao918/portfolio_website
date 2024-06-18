// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/biography">Biography</Link></li>
        <li><Link to="/interests">Interests</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/skills">Skills</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
