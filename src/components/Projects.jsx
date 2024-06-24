import React from 'react';

const currentProjects = [
  {
    title: 'Clean Water Initiative',
    description: 'Providing access to clean and safe drinking water in rural areas.',
    goals: 'Ensure clean water access to 10,000 people by the end of the year.',
    progress: '70%',
    involvement: 'You can help by donating or volunteering for our water testing and distribution events.',
    image: '/images/project1.jpg',
  },
  {
    title: 'Educational Programs',
    description: 'Empowering children through education and skill development.',
    goals: 'Build 5 new schools and provide educational materials to 1,000 children.',
    progress: '50%',
    involvement: 'Join us as a volunteer teacher or donate educational materials.',
    image: '/images/project2.jpg',
  },
  {
    title: 'Healthcare Services',
    description: 'Improving healthcare facilities and services in underserved communities.',
    goals: 'Renovate 3 healthcare centers and provide medical supplies.',
    progress: '80%',
    involvement: 'Support us by donating medical supplies or funds for renovation.',
    image: '/images/project3.jpg',
  },
];

const pastProjects = [
  {
    title: 'Agricultural Development',
    description: 'Implemented modern farming techniques to increase crop yield.',
    outcomes: 'Increased crop yield by 40% and improved food security for 5,000 families.',
    impactReport: 'Read the full impact report here.',
    image: '/images/project4.jpg',
  },
  {
    title: 'Women Empowerment',
    description: 'Provided vocational training and micro-loans to women.',
    outcomes: 'Empowered 500 women to start their own businesses.',
    impactReport: 'Read the full impact report here.',
    image: '/images/project5.jpg',
  },
];

const Projects = () => {
  return (
    <div className="p-10 bg-base-200 text-center">
      <section className="mb-10">
        <h2 className="text-3xl font-bold">Current Projects</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentProjects.map((project, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure><img src={project.image} alt={project.title} /></figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <p><strong>Goals:</strong> {project.goals}</p>
                <p><strong>Progress:</strong> {project.progress}</p>
                <p><strong>Get Involved:</strong> {project.involvement}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold">Past Projects</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {pastProjects.map((project, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure><img src={project.image} alt={project.title} /></figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <p><strong>Outcomes:</strong> {project.outcomes}</p>
                <p><a href="#">{project.impactReport}</a></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold">Interactive Map</h2>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1G5y1Z5y1Z5y1Z5y1Z5y1Z5y1Z5y1Z5y"
            width="640"
            height="480"
            title="HUFIDA Operations Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Projects;