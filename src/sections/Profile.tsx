import React from "react";
import "./Profile.css";
import ProfilePic4 from "../assets/profile-pic4.jpg";
import { SocialIcon } from "react-social-icons";

const Profile: React.FC = () => {
  const toggleOpenCV = () => {
    const pdfUrl = process.env.PUBLIC_URL + "/Resume-Janice-Yohana.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume-Janice-Yohana.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="profile">
      <div className="profile-pic">
        <img src={ProfilePic4} className="profile-pic" alt="Profile" />
      </div>
      <div className="section-text">
        <p className="section-title">Hi! I am</p>
        <h1 className="section-name">Janice Yohana</h1>
        {/* <p className="section-desc">Singapore University of Technology and Design</p>
        <p className="section-desc">Year 3, Design and Artificial Intelligence</p> */}
        <div className="section-role">Frontend Developer, UI/UX Designer</div>
        <div className="section-desc">
          On a mission to blend creativity with AI, crafting unforgettable
          digital interfaces and user experiences, making technology seamless
          and intuitive for all
        </div>
        <div className="btn-container">
          {/* <button className="btn-1" onClick={toggleOpenCV}>
            Download Resume
          </button> */}
          <div className="socials-container">
            <SocialIcon network="mailto" url="mailto:janiceyohana@gmail.com" />
            <SocialIcon
              network="linkedin"
              url="https://www.linkedin.com/in/janice-yohana-gunawan-83788021b/"
            />
            <SocialIcon
              network="github"
              url="https://github.com/janiceyohana"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
