import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import AboutUsPage from './pages/AboutUsPage';
import ProjectsPage from './pages/ProjectsPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
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
    </Router>
  );
}

export default App;