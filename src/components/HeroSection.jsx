import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

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

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: 'easeInOut' }
  };

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.3 } }
  };

  return (
    <div className="hero min-h-screen">
      <Slider {...settings}>
        <div className="hero-slide" style={{ backgroundImage: 'url(/images/hero-banner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} role="img" aria-label="Hero Banner showing empowerment in Africa">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <motion.div 
              className="max-w-md"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h1 className="mb-5 text-5xl font-bold" variants={fadeInUp}>
                Empowering Africa's Future
              </motion.h1>
              <motion.p className="mb-5" variants={fadeInUp}>
                Join us in our mission to create sustainable development and innovative solutions that improve the quality of life in African communities.
              </motion.p>
              <motion.div className="flex justify-center space-x-4" variants={fadeInUp}>
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Get Involved"
                >
                  Get Involved
                </motion.button>
                <motion.button 
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Donate Now"
                >
                  Donate Now
                </motion.button>
                <motion.button 
                  className="btn btn-accent"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Read Our Blog"
                >
                  Read Our Blog
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="hero-slide" style={{ backgroundImage: 'url(/images/another-banner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} role="img" aria-label="Banner showing innovative solutions">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <motion.div 
              className="max-w-md"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h1 className="mb-5 text-5xl font-bold" variants={fadeInUp}>
                Innovative Solutions
              </motion.h1>
              <motion.p className="mb-5" variants={fadeInUp}>
                Creating sustainable solutions for African communities.
              </motion.p>
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeInUp}
                aria-label="Learn More"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;