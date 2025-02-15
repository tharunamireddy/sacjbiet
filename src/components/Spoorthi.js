import React from 'react';
import './Spoorthi.css';

const Events = [
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739369598/IMG-20250211-WA0027_unafw3.jpg',
    name: 'Dancing',
    bg:'https://res.cloudinary.com/dwch0edff/image/upload/v1739546504/IMG-20250214-WA0022_kpmg2w.jpg'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739368986/IMG-20250211-WA0058_jnuzpg.jpg',
    name: 'Singing',
    bg:'https://res.cloudinary.com/dwch0edff/image/upload/v1739546504/IMG_1773_zpdsx5.jpg'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739368986/IMG-20250211-WA0058_jnuzpg.jpg',
    name: 'Fine Arts',
    bg:'https://res.cloudinary.com/dwch0edff/image/upload/v1739546507/IMG-20250214-WA0025_eqlmna.jpg'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739368986/IMG-20250211-WA0058_jnuzpg.jpg',
    name: 'Photography',
    bg:'https://res.cloudinary.com/dwch0edff/image/upload/v1739546505/IMG_1774_zi7h6a.jpg'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739368986/IMG-20250211-WA0058_jnuzpg.jpg',
    name: 'Beat Box',
    bg:'https://res.cloudinary.com/dwch0edff/image/upload/v1739546508/IMG-20250214-WA0024_axpdco.jpg'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739368986/IMG-20250211-WA0058_jnuzpg.jpg',
    name: 'Stand up Comedy',
    bg:'https://res.cloudinary.com/dwch0edff/image/upload/v1739546510/IMG-20250214-WA0023_jippvk.jpg'
  },
];

const Spoorthi = () => {
  return (
    <section id="Spoorthi" className="event-section">
      <h2>CULTURAL EVENTS</h2>
      <div className="event-container">
        {Events.map((event, index) => (
          <div
            className="event-card"
            key={index}
            style={{ backgroundImage: `url(${event.bg})` }}
          >
            <h3>{event.name}</h3>
            <button className="register-btn">Register</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Spoorthi;
