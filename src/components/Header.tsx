import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className="name">
        <div className="iconJ">J</div>
        <div className="logo">Janice Yohana</div>
      </div>
      <div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About me</Link></li>
          <li><Link to="/experiences">Experiences</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><a href="#contacts">Contact Me</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
