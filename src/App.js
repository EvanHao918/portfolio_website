// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Biography from './pages/Biography';
import Interests from './pages/Interests';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


