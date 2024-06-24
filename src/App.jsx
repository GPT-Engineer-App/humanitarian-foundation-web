import React from 'react';
import HeroSection from './components/HeroSection';
import MissionStatement from './components/MissionStatement';
import NavigationBar from './components/NavigationBar';
import QuickLinks from './components/QuickLinks';
import FeaturedProjects from './components/FeaturedProjects';
import Projects from './components/Projects';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <MissionStatement />
      <QuickLinks />
      <FeaturedProjects />
      <Projects /> {/* Added Projects section */}
      <AboutUs />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;