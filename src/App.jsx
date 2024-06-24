import React from 'react';
import HeroSection from './components/HeroSection';
import MissionStatement from './components/MissionStatement';
import NavigationBar from './components/NavigationBar';
import QuickLinks from './components/QuickLinks';
import FeaturedProjects from './components/FeaturedProjects';
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
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;