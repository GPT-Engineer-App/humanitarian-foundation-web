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
import Contact from './components/Contact';
import ImpactStories from './components/ImpactStories';
import ProjectShowcase from './components/ProjectShowcase';
import Transparency from './components/Transparency';
import DonorRecognition from './components/DonorRecognition';
import AboutUsPage from './pages/AboutUs';
import InteractiveQuiz from './components/InteractiveQuiz';
import ProjectsPage from './pages/Projects';
import GetInvolvedPage from './pages/GetInvolved';
import NewsPage from './pages/News';
import ContactPage from './pages/Contact';
import PartnersPage from './pages/Partners';
import BlogPage from './pages/Blog';

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
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/quiz" element={<InteractiveQuiz />} />
      </Routes>
      <MissionStatement />
      <QuickLinks />
      <FeaturedProjects />
      <Projects />
      <AboutUs />
      <GetInvolved />
      <News />
      <Testimonials />
      <Contact />
      <ImpactStories />
      <ProjectShowcase />
      <Transparency />
      <DonorRecognition />
      <Footer />
    </Router>
  );
}

export default App;