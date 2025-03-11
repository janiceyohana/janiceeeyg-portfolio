import React, { useState } from "react";
import "./Projects.css";
import Slider from "react-slick";
import Card from "../components/Card";
import CardBig from "../components/CardBig";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import projectsData from "../assets/projectsdata.json";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CustomPrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow custom-prev`} onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  );
};

const CustomNextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow custom-next`} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleProjectSelect = (index: number) => {
    setSelectedProject(index);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects">
      <p className="contact-subtitle">Browse My</p>
      <div className="project-title">Projects</div>

      <div className="carousel-container">
        {selectedProject === null ? (
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            adaptiveHeight={true}
            draggable={true}
            swipe={true}
            prevArrow={<CustomPrevArrow />}
            nextArrow={<CustomNextArrow />}
            responsive={[{ breakpoint: 900, settings: { slidesToShow: 1 } }]}
          >
            {projectsData.map((project, index) => (
              <div key={index} className="slide">
                <Card
                  {...project}
                  onSelect={() => handleProjectSelect(index)}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="cardbigcont">
            <CardBig {...projectsData[selectedProject]} onClose={handleClose} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
