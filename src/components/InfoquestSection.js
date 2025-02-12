import React from 'react';
import './InfoquestSection.css';

const departments = [
    {
      photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739377232/IMG-20240904-WA0007_16x9_fhicwu.png',
      name: 'CODEHUB',
      about: 'Register for our upcoming event "TECHPULSE',
    },
    {
      photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739377232/IMG-20240904-WA0007_16x9_fhicwu.png',
      name: 'DATA WRANGLERS',
      about: 'Register for our upcoming event "TECHPULSE',
    },{
        photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739377232/IMG-20240904-WA0007_16x9_fhicwu.png',
        name: 'AIML MAVRICKS',
        about: 'Register for our upcoming event "TECHPULSE',
      },
      {
        photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739377232/IMG-20240904-WA0007_16x9_fhicwu.png',
        name: 'AIML MAVRICKS',
        about: 'Register for our upcoming event "TECHPULSE',
      },{
        photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739377232/IMG-20240904-WA0007_16x9_fhicwu.png',
        name: 'AIML MAVRICKS',
        about: 'Register for our upcoming event "TECHPULSE',
      },{
        photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739377232/IMG-20240904-WA0007_16x9_fhicwu.png',
        name: 'AIML MAVRICKS',
        about: 'Register for our upcoming event "TECHPULSE',
      },
  ];

const InfoquestSection = () => {
  return (
    <section id="infoquest" className="infoquest-section">
      <div className="infoquest-content">
        <h2>About Infoquest</h2>
        <p>
          Infoquest is a platform that provides information and resources for students.
          It helps you stay updated on campus activities, events, and more.
        </p>
        <div className="department-container">
        {departments.map((department, index) => (
          <div className="department-card" key={index}>
            <img src={department.photo} alt={department.name} />
            <h3>{department.name}</h3>
            <p>{department.about}</p>
            <a href='https://www.codehubjbiet.com' target='_blank'>
            <button className='register-btn'>Register</button></a>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default InfoquestSection;
