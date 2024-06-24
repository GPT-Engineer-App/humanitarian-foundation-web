import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(/images/hero-banner.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Empowering Africa's Future</h1>
          <p className="mb-5">Join us in making a difference through innovative development projects.</p>
          <button className="btn btn-primary">Get Involved</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;