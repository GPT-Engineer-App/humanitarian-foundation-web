import React from 'react';

const projects = [
  {
    title: 'Clean Water Initiative',
    description: 'Providing access to clean and safe drinking water in rural areas.',
    image: '/images/project1.jpg',
  },
  {
    title: 'Educational Programs',
    description: 'Empowering children through education and skill development.',
    image: '/images/project2.jpg',
  },
  {
    title: 'Healthcare Services',
    description: 'Improving healthcare facilities and services in underserved communities.',
    image: '/images/project3.jpg',
  },
];

const FeaturedProjects = () => {
  return (
    <div className="p-10 bg-base-200 text-center">
      <h2 className="text-3xl font-bold">Featured Projects</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="card bg-base-100 shadow-xl transform transition-transform hover:scale-105">
            <figure><img src={project.image} alt={project.title} /></figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;