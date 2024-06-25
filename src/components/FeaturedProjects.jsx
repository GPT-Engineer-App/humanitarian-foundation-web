import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: 'Clean Water Initiative',
    description: 'Providing access to clean and safe drinking water in rural areas.',
    image: '/images/project1.jpg',
    alt: 'Clean Water Initiative Project',
  },
  {
    title: 'Educational Programs',
    description: 'Empowering children through education and skill development.',
    image: '/images/project2.jpg',
    alt: 'Educational Programs Project',
  },
  {
    title: 'Healthcare Services',
    description: 'Improving healthcare facilities and services in underserved communities.',
    image: '/images/project3.jpg',
    alt: 'Healthcare Services Project',
  },
];

const FeaturedProjects = () => {
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
    <div className="p-10 bg-base-200 text-center">
      <h2 className="text-3xl font-bold">Featured Projects</h2>
      <Slider {...settings} className="mt-4">
        {projects.map((project, index) => (
          <div key={index} className="card bg-base-100 shadow-xl transform transition-transform hover:scale-105">
            <figure><img src={project.image} alt={project.alt} /></figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProjects;