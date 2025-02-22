import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MainPillars from './components/MainPillars';
import PresidentSection from './components/PresidentSection';
import EventGallery from './components/EventGallery';
import Spoorthi from './components/Spoorthi'
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <MainPillars />
      <PresidentSection />
      <EventGallery />
      <Spoorthi />
      <AboutUs />
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;
