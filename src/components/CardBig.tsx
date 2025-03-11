import React from "react";
import "./CardBig.css";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

interface Link {
  linktitle: string;
  linkhtml: string;
}

interface CardBigProps {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  links?: Link[];
  onClose: () => void;
}

const CardBig: React.FC<CardBigProps> = ({
  id,
  image,
  title,
  subtitle,
  description,
  links,
  onClose,
}) => {
  return (
    <div>
      <img src={image} alt={title} className="image-box" />
      <div className="card-big">
        <button className="close-btn" onClick={onClose}>
          <CloseFullscreenIcon />
        </button>
        {/* <img src={image} alt={title} className="image-box" /> */}
        <div className="cardbig-content">
          <h2 className="cardbig-title">{title}</h2>
          <p className="cardbig-subtitle">{subtitle}</p>
          <p className="card-description">{description}</p>
          <div className="card-links">
            {links?.map((link, index) =>
              link.linkhtml ? (
                <a
                  key={index}
                  href={link.linkhtml}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  {link.linktitle}
                </a>
              ) : (
                <span key={index} className="link-button">
                  {link.linktitle} (Invalid Link)
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBig;
