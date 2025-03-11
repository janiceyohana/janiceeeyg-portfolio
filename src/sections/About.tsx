import React from "react";
import "./About.css";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ProfilePic2 from "../assets/profile-pic2.png";

const About: React.FC = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      description: "Strong foundation in frontend and backend programming.",
      skills: [
        "Python",
        "Ruby on Rails",
        "JavaScript",
        "TypeScript",
        "CSS",
        "SCSS",
        "HTML",
      ],
    },
    {
      category: "Development Tools",
      description: "Frameworks and tools for building responsive applications.",
      skills: [
        "React",
        "SignalR",
        "API integration",
        "Streamlit",
        "Arduino IDE",
      ],
    },
    {
      category: "UI/UX & Prototyping",
      description: "Design and prototyping tools for user experience design.",
      skills: ["Figma", "Miro", "Sketch"],
    },
    {
      category: "Design & Digital Art",
      description: "Creative tools for vector illustration and digital art.",
      skills: [
        "Vectornator",
        "CorelDRAW",
        "Procreate",
        "Adobe Illustrator",
        "Adobe Photoshop",
      ],
    },
    {
      category: "Video & 3D Modeling",
      description: "Tools for video editing and 3D modeling.",
      skills: ["Adobe Premiere", "Rhino", "Grasshopper", "AutoDesk Fusion360"],
    },
    {
      category: "Productivity & Office Tools",
      description: "General tools for documentation and productivity.",
      skills: ["Microsoft Office"],
    },
  ];

  return (
    <div className="about">
      <div className="about-me">
        <div className="about-text">
          <div className="about-subtitle">Get To Know</div>
          <div className="about-title">WHO I AM</div>
          <div className="about-edu">
            Singapore University of Technology and Design
          </div>
          <div className="about-edu">
            Year 4, Design and AI Pillar (Bachelor of Science, Hons)
          </div>
          <div className="about-desc">
            I passionately immerse myself in the realms of UI/UX design and web
            development. With a keen eye for detail, I strive for pixel-perfect
            designs and thrive on crafting interactive user experiences that
            captivate and delight. My commitment to excellence extends beyond
            aesthetics—I take pride in delivering exceptional customer service,
            consistently exceeding the expectations of my partners and clients.
          </div>
          {/* <div className='work-button'>
            <div className='about-btn'>
              More about me
              <KeyboardArrowDownRoundedIcon/>
            </div>
          </div> */}
        </div>
        <img src={ProfilePic2} className="about-img" />
      </div>
      <div className="about-col">
        <div className="education">
          <div className="about-icon">
            <SchoolRoundedIcon />
          </div>
          Education
          <div className="about-container">
            <div className="line1">
              Singapore University of Technology and Design
            </div>
            <div className="line2">Bachelor of Science, Design & AI Pillar</div>
            <div className="line3">2021-2025</div>
          </div>
          <div className="about-container">
            <div className="line1">SMAK 1 BPK Penabur Bandung</div>
            <div className="line2">GCE O-Level & A-Level International</div>
            <div className="line3">2018-2021</div>
          </div>
        </div>
        <div className="engagements">
          <div className="about-icon">
            <MilitaryTechRoundedIcon />
          </div>
          Engagements
          <div className="about-container">
            <div className="line1">SUTD Student Government (ROOT)</div>
            <div className="line2">Director of Events & Welfare</div>
            <div className="line3">February 2022 - 2023</div>
          </div>
          <div className="about-container">
            <div className="line1">Phyxius English Debate Competition</div>
            <div className="line2">Liaison Officer</div>
            <div className="line3">SMAK 1 BPK Penabur Bandung</div>
          </div>
          <div className="about-container">
            <div className="line1">Model United Nation</div>
            <div className="line2">Delegate, Co-curricular Activities</div>
            <div className="line3">July - December 2021</div>
          </div>
        </div>
      </div>
      {/* <div className="about-skills">
        <div className="skills">
          <div className="about-icon">
            <EmojiObjectsIcon />
          </div>
          <div className="skills-title">Skills</div>
        </div>
        <div className="skills-container">
          {skillsData.map((item, index) => (
            <div key={index}>
              <div className="skills-category">{item.category}</div>
              <div className="skills-description">{item.description}</div>
              <div className="skills-list">
                {item.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default About;
