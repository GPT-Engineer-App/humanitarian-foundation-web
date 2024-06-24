import React from 'react';
import HeroSection from './components/HeroSection';
import MissionStatement from './components/MissionStatement';
import NavigationBar from './components/NavigationBar';
import QuickLinks from './components/QuickLinks';
import FeaturedProjects from './components/FeaturedProjects';
import Projects from './components/Projects';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Footer from './components/Footer';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact'; // Added import

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
      <GetInvolved />
      <News /> {/* Added News section */}
      <Testimonials />
      <Contact /> {/* Added Contact section */}
      <Footer />
    </>
  );
}

export default App;