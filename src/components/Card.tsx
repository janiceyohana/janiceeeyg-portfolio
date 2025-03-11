import React from "react";
import "./Card.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

interface CardProps
{
  id: number;
  image: string;
  title: string;
  subtitle: string;
  onSelect: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, onSelect }) => {
  return (
    <div className="card" onClick={onSelect}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-subtitle">{subtitle}</p>
        <a className="card-link">
          View Project <ArrowOutwardIcon />
        </a>
      </div>
    </div>
  );
};

export default Card;
