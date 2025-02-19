import React from 'react';
import './Spoorthi.css';

const Events = [
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739369598/IMG-20250211-WA0027_unafw3.jpg',
    name: 'Dancing',
    url:'https://forms.gle/cpngQLEPBWuCoz8n7',
    bg:'https://res.cloudinary.com/dwch0edff/image/upload/v1739546504/IMG-20250214-WA0022_kpmg2w.jpg'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739368986/IMG-20250211-WA0058_jnuzpg.jpg',
    name: 'Singing',
    url:'https://forms.gle/zs2cEvi5wEqskoVM7',
    bg:'https://res.cloudinary.com/dwch0edff/image/upload/v1739546504/IMG_1773_zpdsx5.jpg'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739368986/IMG-20250211-WA0058_jnuzpg.jpg',
    name: 'Fine Arts',
    url:'https://forms.gle/HLUB1tgZwVRYJj4F6',
    bg:'https://res.cloudinary.com/dwch0edff/image/upload/v1739546507/IMG-20250214-WA0025_eqlmna.jpg'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739368986/IMG-20250211-WA0058_jnuzpg.jpg',
    name: 'Photography',
    url:'https://forms.gle/vwFnng2CiAiKzkCF7',
    bg:'https://res.cloudinary.com/dwch0edff/image/upload/v1739546505/IMG_1774_zi7h6a.jpg'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739368986/IMG-20250211-WA0058_jnuzpg.jpg',
    name: 'Beat Box',
    url:'https://forms.gle/KK8Wectkt3mrsFao7',
    bg:'https://res.cloudinary.com/dwch0edff/image/upload/v1739546508/IMG-20250214-WA0024_axpdco.jpg'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739368986/IMG-20250211-WA0058_jnuzpg.jpg',
    name: 'Stand up Comedy',
    url:'https://forms.gle/MJzqMqkQfxUZP1Un6',
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
            <a  href={event.url}><button className="register-btn">Register</button></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Spoorthi;
