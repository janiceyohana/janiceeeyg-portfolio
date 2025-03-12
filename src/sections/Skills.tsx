import React from "react";
import "./Skills.css";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ProfilePic2 from "../assets/profile-pic2.png";

const Skills: React.FC = () => {
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
      skills: ["Microsoft Office", "Azure", "Canva"],
    },
  ];

  return (
    <div className="skills">
      <div className="skill-text">
        <div className="skill-subtitle">
          Discover My
        </div>
        <div className="skill-title">Skills</div>
      </div>
      <div className="about-skills">
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
      </div>
    </div>
  );
};

export default Skills;
