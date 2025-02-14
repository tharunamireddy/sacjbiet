import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-image">
        <img src="https://res.cloudinary.com/dwch0edff/image/upload/v1739385534/IMG-20250212-WA0036_vwxmcy.jpg" alt="College Activity" />
      </div>
      <img src='https://res.cloudinary.com/dwch0edff/image/upload/v1739467047/IMG-20250213-WA0034_ibifev.jpg' alt='sac' className="home-heading"/>
    </section>
  );
};

export default Home;
