import React from "react";
import "./ProjectDetailModal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  link,
}) => {
  if (!isOpen) return null; // If the modal is not open, don't render it

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>
          X
        </button>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project Website
          </a>
        )}
      </div>
    </div>
  );
};

export default Modal;
