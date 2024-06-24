import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="hero min-h-screen">
      <Slider {...settings}>
        <div className="hero-slide" style={{ backgroundImage: 'url(/images/hero-banner.jpg)' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Empowering Africa's Future</h1>
              <p className="mb-5">Join us in making a difference through innovative development projects.</p>
              <button className="btn btn-primary">Get Involved</button>
            </div>
          </div>
        </div>
        <div className="hero-slide" style={{ backgroundImage: 'url(/images/another-banner.jpg)' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Innovative Solutions</h1>
              <p className="mb-5">Creating sustainable solutions for African communities.</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;