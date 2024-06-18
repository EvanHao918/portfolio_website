// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <ul>
        <li><a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://www.joinhandshake.com/yourprofile" target="_blank" rel="noopener noreferrer">Handshake</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
