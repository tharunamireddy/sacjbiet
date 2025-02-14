import React from 'react';
import './PresidentSection.css';

const presidents = [
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739369598/IMG-20250211-WA0027_unafw3.jpg',
    name: 'K. SAITEJA REDDY',
    about: 'Our college also offers research opportunities for those driven to advance the boundaries of engineering knowledge. These programs provide a platform for students to engage in high-impact research projects, collaborate with esteemed faculty.',
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739368986/IMG-20250211-WA0058_jnuzpg.jpg',
    name: 'S. MANOGNA REDDY',
    about: 'Our college offers exciting research opportunities for students passionate about exploring new ideas in engineering. These programs let students work on meaningful projects and collaborate with experienced faculty to make a real impact.',
  },
];

const PresidentSection = () => {
  return (
    <section id="president" className="president-section">
      <h2>STUDENT COORDINATORS</h2>
      <div className="president-container">
        {presidents.map((president, index) => (
          <div className="president-card" key={index}>
            <img src={president.photo} alt={president.name} />
            <h3>{president.name}</h3>
            <p>{president.about}</p>
          </div>
        ))}
        <img src='https://res.cloudinary.com/dwch0edff/image/upload/v1739536843/sphoorti_poster_grand_finale_x55oxa.png' alt='info' className='info'/>
      </div>
    </section>
  );
};

export default PresidentSection;
