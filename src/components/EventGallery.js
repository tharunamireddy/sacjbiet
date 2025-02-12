import React from 'react';
import Slider from 'react-slick';
import './EventGallery.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const events = [
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374856/e2_j0kys0.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374948/IMG-20250211-WA0019_tvs5hm.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374953/IMG-20250211-WA0022_j2dzlc.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374885/e6_xxnur2.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374860/e1_slb5va.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374885/e7_ud3ubt.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374923/IMG_20250211_112419_294_xdl6wo.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374944/IMG-20250211-WA0004_u8msp8.jpg',
  // Add more images as needed
];

const EventGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <section id="gallery" className="event-gallery">
      <h2>Event Gallery</h2>
      <Slider {...settings}>
        {events.map((src, index) => (
          <div key={index} className="gallery-slide">
            <img src={src} className='gallery' alt={`Event ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default EventGallery;
