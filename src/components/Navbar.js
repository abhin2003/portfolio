// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import profilePic from '../Assets/Profilepic.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={profilePic} alt="Profile" className="navbar-profile-pic" />
        <span><b>ABHIN S KRISHNA</b></span>
      </div>
      <div className="navbar-links">
        <a href="#"><b>Home</b></a>
        <a href="#"><b>About</b></a>
        <a href="#"><b>Projects</b></a>
        <a href="#"><b>Contact</b></a>
      </div>
    </nav>
  );
};

export default Navbar;
