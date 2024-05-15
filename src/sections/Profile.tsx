import React from 'react';
import './Profile.css';
import ProfilePic from '../assets/profile-pic.jpg';

const Profile: React.FC = () => {

  const toggleOpenCV = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/Resume-Janice-Yohana.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Resume-Janice-Yohana.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="profile">
      <div className='profile-pic'>
        <img src={ProfilePic} className='profile-pic' alt='Profile'/>
      </div>
      <div className="section-text">
        <p className="section-title">Hi! I am</p>
        <h1 className="section-name">Janice Yohana</h1>
        {/* <p className="section-desc">Singapore University of Technology and Design</p>
        <p className="section-desc">Year 3, Design and Artificial Intelligence</p> */}
        <div className="section-role">Frontend Developer, UI/UX Designer</div>
        <div className="section-desc">On a mission to blend creativity with AI, crafting unforgettable digital interfaces and user experiences, making technology seamless and intuitive for all</div>
        <div className="btn-container">
          <button className="btn-1" onClick={toggleOpenCV}>Download CV</button>
          <button className="btn-1" onClick={() => {window.location.href='../#contact'}}>Contact Info</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
