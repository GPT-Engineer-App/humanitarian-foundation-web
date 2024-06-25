import React from 'react';

const projects = [
  {
    title: 'Clean Water Initiative',
    description: 'Providing access to clean and safe drinking water in rural areas.',
    progress: 'Completed',
    image: '/images/project1.jpg',
    video: 'https://www.youtube.com/embed/example1',
  },
  {
    title: 'Educational Programs',
    description: 'Empowering children through education and skill development.',
    progress: 'Ongoing',
    image: '/images/project2.jpg',
    video: 'https://www.youtube.com/embed/example2',
  },
  // Add more projects as needed
];

const ProjectShowcase = () => {
  return (
    <div className="p-10 bg-base-200 text-center">
      <h2 className="text-3xl font-bold">Project Showcase</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure><img src={project.image} alt={project.title} /></figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Progress:</strong> {project.progress}</p>
              <div className="video-responsive">
                <iframe
                  width="560"
                  height="315"
                  src={project.video}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;