import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} SAC JBIET. All Rights Reserved. Developed by <a className='link' rel='noreferrer' target='_blank' href="https://www.instagram.com/tharun_______07?igsh=MWRpanpmdG5iZzQyMQ==">Tharun Amireddy</a></p>
    </footer>
  );
};

export default Footer;
