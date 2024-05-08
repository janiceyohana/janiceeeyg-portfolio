import React from 'react';
import './About.css';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';

const About: React.FC = () => {
  return (
    <div className='about'>
      <div>
        <p className="contact-subtitle">Get To Know More</p>
        <div className="contact-title">About Me</div>
      </div>
      <div className='about-col'>
        <div className='education'>
          <div className='about-icon'>
            <SchoolRoundedIcon/>
          </div>
          Education
          <div className='about-container'>
            <div className='line1'>Singapore University of Technology and Design</div>
            <div className='line2'>Bachelor of Science, Design & AI Pillar</div>
            <div className='line3'>2021-2025</div>
          </div>
          <div className='about-container'>
            <div className='line1'>SMAK 1 BPK Penabur Bandung</div>
            <div className='line2'>GCE O-Level & A-Level International</div>
            <div className='line3'>2018-2021</div>
          </div>
        </div>
        <div className='engagements'>
          <div className='about-icon'>
            <MilitaryTechRoundedIcon/>
          </div>
          Engagements
          <div className='about-container'>
            <div className='line1'>SUTD Student Government (ROOT)</div>
            <div className='line2'>Director of Events & Welfare</div>
            <div className='line3'>February 2022 - 2023</div>
          </div>
          <div className='about-container'>
            <div className='line1'>Phyxius English Debate Competition</div>
            <div className='line2'>Liaison Officer</div>
            <div className='line3'>SMAK 1 BPK Penabur Bandung</div>
          </div>
          <div className='about-container'>
            <div className='line1'>Model United Nation</div>
            <div className='line2'>Delegate, Co-curricular Activities</div>
            <div className='line3'>July - December 2021</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
