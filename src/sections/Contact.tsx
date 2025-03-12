import React from 'react';
import './Contact.css';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/github';
import 'react-social-icons/mailto';
import 'react-social-icons/linkedin';

const Contact: React.FC = () => {
  return (
    <div className="contacts">
      <div className="contacts-container">
        <div className="contacts-row">
          <div>
            <p className="contact-subtitle">Get In Touch</p>
            <div className="contact-title">Contact Me</div>
          </div>
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

export default Contact;
