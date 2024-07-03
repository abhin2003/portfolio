// src/components/HomePage.js
import React from 'react';
import './HomePage.css';
import backgroundImage from '../Assets/Background.png';
import lk from '../Assets/Linkedin.png';
import tw from '../Assets/Twitter.png';
import gt from '../Assets/Github.png';

const HomePage = () => {
  return (
    <div className="homepage" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="con">
        <div className='content'>
        <h1>HEY, I'M ABHIN S KRISHNA</h1>
        <p>A Passionate Developer focused on building impactful software solutions.</p>
        </div>
        </div>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/abhinskrishna/"><img src={lk} alt="LinkedIn" /></a>
            <a href="https://x.com/AbhinSKrishna"><img src={tw} alt="Twitter" /></a>
            <a href="https://github.com/abhin2003"><img src={gt} alt="Github" /></a>
        </div>
      </div>


  );
};

export default HomePage;
