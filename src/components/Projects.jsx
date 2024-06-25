import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ProjectTable from './ProjectTable';
import TaskTable from './TaskTable';
import TeamMemberTable from './TeamMemberTable';
import MilestoneTable from './MilestoneTable';
import ResourceTable from './ResourceTable';
import CommunicationTable from './CommunicationTable';

const currentProjects = [
  {
    title: 'Clean Water Initiative',
    description: 'Providing access to clean and safe drinking water in rural areas.',
    goals: 'Ensure clean water access to 10,000 people by the end of the year.',
    progress: '70%',
    involvement: 'You can help by donating or volunteering for our water testing and distribution events.',
    image: '/images/project1.jpg',
    position: [1.2921, 36.8219], // Nairobi, Kenya
  },
  {
    title: 'Educational Programs',
    description: 'Empowering children through education and skill development.',
    goals: 'Build 5 new schools and provide educational materials to 1,000 children.',
    progress: '50%',
    involvement: 'Join us as a volunteer teacher or donate educational materials.',
    image: '/images/project2.jpg',
    position: [0.3476, 32.5825], // Kampala, Uganda
  },
  {
    title: 'Healthcare Services',
    description: 'Improving healthcare facilities and services in underserved communities.',
    goals: 'Renovate 3 healthcare centers and provide medical supplies.',
    progress: '80%',
    involvement: 'Support us by donating medical supplies or funds for renovation.',
    image: '/images/project3.jpg',
    position: [-1.2921, 36.8219], // Nairobi, Kenya
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
        <h2 className="text-3xl font-bold">Project Showcase</h2>
        <div className="mt-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/your-video-id" title="HUFIDA Project Showcase" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold">Project Progress and Impact</h2>
        <div className="mt-4">
          <img src="/images/infographics/project-progress-infographic.png" alt="HUFIDA Project Progress Infographic" className="w-full h-auto" />
        </div>
      </section>

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
          <MapContainer center={[1.2921, 36.8219]} zoom={5} style={{ height: "500px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {currentProjects.map((project, index) => (
              <Marker key={index} position={project.position}>
                <Popup>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold">Project Management</h2>
        <ProjectTable />
        <TaskTable />
        <TeamMemberTable />
        <MilestoneTable />
        <ResourceTable />
        <CommunicationTable />
      </section>
    </div>
  );
};

export default Projects;