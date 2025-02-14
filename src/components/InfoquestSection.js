import React, { useState } from 'react';
import './InfoquestSection.css';

const departments = [
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739377232/IMG-20240904-WA0007_16x9_fhicwu.png',
    name: 'CODEHUB',
    about: 'Register for our upcoming event "TECH PULSE',
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739509686/IMG_20230915_164236_176_qthfdz.png',
    name: 'DATA WRANGLERS',
    about: 'Register for our upcoming event WrangleX',
    coordinator: 'Coordinator: John Doe, Phone: 1234567890'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739517771/IMG-20250214-WA0009_wgsbho.jpg',
    name: 'AIML MAVERICKS',
    about: 'Register for our upcoming event AI VERSE',
    coordinator: 'Coordinator: Jane Smith, Phone: 9876543210'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739517772/clique1_isto1_cwuqcy.png',
    name: 'CLIQUE',
    about: 'Register for our upcoming event Dronathon',
    coordinator: 'Coordinator: Alex Brown, Phone: 5551234567'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739509685/IMG-20250213-WA0033_hviyhn.jpg',
    name: 'CESA',
    about: 'Register for our upcoming event Technical Quiz',
    coordinator: 'Coordinator: Emily Green, Phone: 4449876543'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739509685/IMG-20250213-WA0041_f2m32m.jpg',
    name: 'ECHOS',
    about: 'Register for our upcoming event Robowars',
    coordinator: 'Coordinator: Michael Blue, Phone: 3334445555'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739517771/IMG-20250214-WA0008_imkjaf.jpg',
    name: 'CSI',
    about: 'Register for our upcoming event InnovateX',
    coordinator: 'Coordinator: Sarah Yellow, Phone: 2223334444'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739509686/Elexsa_Logo_mn4oun.jpg',
    name: 'ELEXSA',
    about: 'Register for our upcoming event Electrika',
    coordinator: 'Coordinator: David Red, Phone: 1112223333'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739509685/sae-jbiet-hyderabad-n5j4dbdu16_zvq4y3.jpg',
    name: 'SAE',
    about: 'Register for our upcoming event "Mech Tech Expo',
    coordinator: 'Coordinator: Olivia Purple, Phone: 7778889999'
  },
  {
    photo: 'https://res.cloudinary.com/dwch0edff/image/upload/v1739509685/sae-jbiet-hyderabad-n5j4dbdu16_zvq4y3.jpg',
    name: 'MBA',
    about: 'Register for our upcoming event "Management Events',
    coordinator: 'Coordinator: Daniel White, Phone: 6665554444'
  },
];

const InfoquestSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleRegisterClick = (department) => {
    if (department.name.toUpperCase() === 'CODEHUB') {
      // Redirect CODEHUB directly
      window.location.href = 'https://codehubjbiet.com';
    } else {
      // Open the modal popup for other departments
      setSelectedDepartment(department);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDepartment(null);
  };

  return (
    <section id="infoquest" className="infoquest-section">
      <div className="infoquest-content">
        <h2>Infoquest</h2>
        <p>
          Infoquest is a Technical Event conducted by all the branches of college.
        </p>
        <div className="department-container">
          {departments.map((department, index) => (
            <div className="department-card" key={index}>
              <img src={department.photo} alt={department.name} />
              <h3>{department.name}</h3>
              <p>{department.about}</p>
              <button className="register-btn" onClick={() => handleRegisterClick(department)}>
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Modal Popup for department registration */}
      {modalOpen && selectedDepartment && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>X</button>
            <div className="modal-poster">
              <img src={selectedDepartment.photo} alt={`${selectedDepartment.name} Poster`} />
            </div>
            <div className="modal-details">
              <h3>{selectedDepartment.name} Registration Details</h3>
              <p>{selectedDepartment.coordinator || 'Coordinator details not available.'}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InfoquestSection;
