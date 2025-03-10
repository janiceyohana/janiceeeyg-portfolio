import React, { useState } from "react";
import "./Card.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Modal from "./ProjectDetailModal";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  description,
  link,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Opening modal");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
  };


  return (
    <div>
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-subtitle">{subtitle}</p>
          <a className="card-link" onClick={openModal}>
            See More
            <KeyboardArrowRightIcon />
          </a>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={title}
        subtitle={subtitle}
        description={description}
        link={link}
      />
    </div>
  );
};

export default Card;
