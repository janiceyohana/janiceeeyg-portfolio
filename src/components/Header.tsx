import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleScroll = (id: string) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      console.log(activeSection);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="header">
      <div className="name">
        {/* <div className="iconJ">J</div> */}
        <div className="logo">Janice Yohana</div>
      </div>
      <div>
        <ul className="nav-links">
          <li>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("home");
              }}
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("about");
              }}
              className={activeSection === "about-me" ? "active" : ""}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("experiences");
              }}
              className={activeSection === "experiences" ? "active" : ""}
            >
              Experiences
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("projects");
              }}
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contacts");
              }}
              className={activeSection === "contacts" ? "active" : ""}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
