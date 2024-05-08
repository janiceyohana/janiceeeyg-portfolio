import React from 'react';
import './Experiences.css';
import EYLogo from '../assets/EY.png';
import PGLogo from '../assets/pg.png';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const Experiences: React.FC = () => {
  return (
    <div className='experiences'>
      <div>
        <p className="contact-subtitle">Get To Know More</p>
        <div className="contact-title">Experiences</div>
      </div>
      <div className='work-row'>
        <div className='work-container'>
          <img src={EYLogo} className='company-logo' alt='EY Logo'/>
          <div className='line1'>EY Digital and Emerging Tech Singapore</div>
          <div className='line2'>Tech Intern, Front-end Development</div>
          <div className='line3'>Aug - Dec 2023</div>
          <div className='work-button'>
            <div className='learn-more'>
              Learn More
              <KeyboardArrowRightRoundedIcon/>
            </div>
          </div>
        </div>
        <div className='work-container'>
          <img src={PGLogo} className='company-logo' alt='PG Logo'/>
          <div className='line1'>PT. Prima Gracindo</div>
          <div className='line2'>Product Designer Intern</div>
          <div className='line3'>Jan 2020 - 2021</div>
          <div className='work-button'>
            <div className='learn-more'>
              Learn More
              <KeyboardArrowRightRoundedIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
