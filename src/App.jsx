import React, { useEffect, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Breadcrumb from './components/Breadcrumb';
import Footer from './components/Footer';
import Loading from './components/Loading'; // New loading component
import ProjectManagement from './pages/ProjectManagement';

const HeroSection = lazy(() => import('./components/HeroSection'));
const MissionStatement = lazy(() => import('./components/MissionStatement'));
const QuickLinks = lazy(() => import('./components/QuickLinks'));
const FeaturedProjects = lazy(() => import('./components/FeaturedProjects'));
const Projects = lazy(() => import('./components/Projects'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const News = lazy(() => import('./components/News'));
const Contact = lazy(() => import('./components/Contact'));
const ImpactStories = lazy(() => import('./components/ImpactStories'));
const ProjectShowcase = lazy(() => import('./components/ProjectShowcase'));
const Transparency = lazy(() => import('./components/Transparency'));
const DonorRecognition = lazy(() => import('./components/DonorRecognition'));
const AboutUsPage = lazy(() => import('./pages/AboutUs'));
const InteractiveQuiz = lazy(() => import('./components/InteractiveQuiz'));
const ProjectsPage = lazy(() => import('./pages/Projects'));
const GetInvolvedPage = lazy(() => import('./pages/GetInvolved'));
const NewsPage = lazy(() => import('./pages/News'));
const ContactPage = lazy(() => import('./pages/Contact'));
const PartnersPage = lazy(() => import('./pages/Partners'));
const BlogPage = lazy(() => import('./pages/Blog'));
const AdvancedSearch = lazy(() => import('./components/AdvancedSearch'));
const UserProfile = lazy(() => import('./components/UserProfile'));
const UserDashboard = lazy(() => import('./components/UserDashboard'));
const GetInvolved = lazy(() => import('./components/GetInvolved'));

const TRACKING_ID = "UA-XXXXXXXXX-X"; // Replace with your Google Analytics tracking ID

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="App container section-padding">
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Router>
        <NavigationBar />
        <Breadcrumb />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<div className="parallax" style={{backgroundImage: "url('/images/hero-banner.jpg')"}}><HeroSection /></div>} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/get-involved" element={<GetInvolvedPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/quiz" element={<InteractiveQuiz />} />
            <Route path="/advanced-search" element={<AdvancedSearch />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/project-management" element={<ProjectManagement />} />
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
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;