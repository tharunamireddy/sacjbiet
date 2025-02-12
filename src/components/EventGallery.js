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
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374859/e3_f7dphf.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374885/e6_xxnur2.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374917/IMG_20250211_112410_340_bhrlu7.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374924/IMG_20250211_112606_954_b2mpur.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374925/IMG_20250211_112522_988_b5bubj.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374925/IMG_20250211_112633_130_k4ud5u.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374931/IMG_20250211_112719_803_amudnd.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374931/IMG_20250211_112747_706_vvyxpr.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374937/IMG_20250211_113433_234_lpuyce.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374938/IMG_20250211_113450_219_mfhnam.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374942/IMG_20250211_112446_419_chpwcm.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374941/IMG_20250211_112338_272_qzh8ms.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374946/IMG-20250211-WA0011_qkpojb.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374945/IMG-20250211-WA0005_yahfv7.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374957/IMG_20250211_112940_996_d8ed2p.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374966/IMG_20250211_113441_784_hzizqu.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374966/IMG-20250211-WA0026_eajpaa.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374979/IMG-20250211-WA0033_qxf6qj.jpg',
  'https://res.cloudinary.com/dwch0edff/image/upload/v1739374982/IMG-20250211-WA0035_kestkh.jpg',
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
    responsive: [
      {
        breakpoint: 768, // For screens less than 768px wide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="gallery" className="event-gallery">
      <h2>Event Gallery</h2>
      <Slider {...settings}>
        {events.map((src, index) => (
          <div key={index} className="gallery-slide">
            <img src={src} className="gallery" alt={`Event ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default EventGallery;
