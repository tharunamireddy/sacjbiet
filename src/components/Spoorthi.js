import React from 'react';
import './Spoorthi.css';

const Events = [
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739369598/IMG-20250211-WA0027_unafw3.jpg',
    name: 'Dancing',
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739368986/IMG-20250211-WA0058_jnuzpg.jpg',
    name: 'Singing',
  },{
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739368986/IMG-20250211-WA0058_jnuzpg.jpg',
    name: 'Fine Arts',
  },{
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739368986/IMG-20250211-WA0058_jnuzpg.jpg',
    name: 'Photography',
  },{
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739368986/IMG-20250211-WA0058_jnuzpg.jpg',
    name: 'Beat Box',
  },{
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739368986/IMG-20250211-WA0058_jnuzpg.jpg',
    name: 'Standup Comedy',
  },
];

const Spoorthi = () => {
  return (
    <section id="Spoorthi" className="event-section">
      <h2>CULTURAL EVENTS</h2>
      <div className="event-container">
        {Events.map((event, index) => (
          <div className="event-card" key={index}>
            <h3>{event.name}</h3>
            <button className='register-btn'>Register</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Spoorthi;
