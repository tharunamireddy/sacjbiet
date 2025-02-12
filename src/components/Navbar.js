import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src="https://res.cloudinary.com/dwch0edff/image/upload/v1739369762/SAC-JBIET_OFFICIAL_20250212_194533_euljhz.jpg" className='logo' alt="sac"/>SAC JBiet</div>
      
      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
      
      <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
        <li><a href="#infoquest" onClick={() => setMenuOpen(false)}>Infoquest</a></li>
        <li><a href="#aboutus" onClick={() => setMenuOpen(false)}>About us</a></li>
        <li><a href="#contactus" onClick={() => setMenuOpen(false)}>Contact us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
