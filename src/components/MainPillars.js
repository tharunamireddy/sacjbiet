import React from 'react';
import './MainPillars.css';

const pillars = [
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739371833/j-v-krishnarao_oxxwxa.jpg',
    name: 'J.V. Krishna Rao',
    des:'Secretary',
    about: 'The B.Tech program is designed to provide students with a strong foundation in engineering principles and practical skills. It offers a comprehensive understanding of various engineering disciplines, allowing students to specialize in many areas.',
  },{
    photo:'https://res.cloudinary.com/dwch0edff/image/upload/v1739607284/Screenshot_2025-02-15_134218_z0qtub.png',
    name:'PROF. Chintakindi Sanjay',
    des:'Director',
    about: 'I am delighted to extend a warm welcome to you at J. B. Educational Society, situated on a sprawling 106-acre campus in Hyderabad. Established in 1993 under the dynamic leadership and educational entrepreneur, our founder chairman, the late Sri J. Bhaskar Rao Garu. The goal of society is to provide holistic education for students. We want to impart relevant education and create knowledge through research and innovation to cater to the needs of industry and society.'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739370862/principal2021_w29ny1.jpg',
    name: 'Dr. P. C. Krishnamachary',
    des:'Principal'
,    about: 'The M.Tech program is a postgraduate degree that focuses on advanced engineering concepts and specialized knowledge. It enables students to delve deeper into their chosen engineering field and undertake research projects.',
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739372007/sac_20incharge_oj3kb8.jpg',
    name: 'B. Kishore Kumar',
    des:'SAC Incharge',
    about: 'Our college also offers research opportunities for those driven to advance the boundaries of engineering knowledge. These programs provide a platform for students to engage in high-impact research projects, collaborate with esteemed faculty..',
  },
];

const MainPillars = () => {
  return (
    <section id="pillars" className="pillars">
      <h2>PILLARS OF STRENGTH</h2>
      <div className="pillars-container">
        {pillars.map((pillar, index) => (
          <div className="pillar-card" key={index}>
            <img src={pillar.photo} alt={pillar.name} />
            <h3>{pillar.name}</h3>
            <h4>{pillar.des}</h4>
            <p>{pillar.about}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainPillars;
