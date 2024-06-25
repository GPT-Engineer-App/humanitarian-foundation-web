import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaStar } from 'react-icons/fa';

const currentProjects = [
  {
    title: 'Clean Water Initiative',
    description: 'Providing access to clean and safe drinking water in rural areas.',
    goals: 'Ensure clean water access to 10,000 people by the end of the year.',
    progress: '70%',
    involvement: 'You can help by donating or volunteering for our water testing and distribution events.',
    image: '/images/project1.jpg',
    position: [1.2921, 36.8219], // Nairobi, Kenya
    tasks: [
      'Survey water sources',
      'Install water filtration systems',
      'Conduct water quality tests'
    ],
    team: [
      { name: 'John Doe', role: 'Project Manager' },
      { name: 'Jane Smith', role: 'Field Coordinator' }
    ],
    milestones: [
      { milestone: 'Survey completed', date: '2023-01-15' },
      { milestone: 'Filtration systems installed', date: '2023-03-10' }
    ],
    resources: 'Budget: $50,000, Volunteers: 20',
    communications: [
      { date: '2023-01-10', message: 'Initial project meeting' },
      { date: '2023-02-05', message: 'Mid-project review' }
    ],
    votes: 0
  },
  {
    title: 'Educational Programs',
    description: 'Empowering children through education and skill development.',
    goals: 'Build 5 new schools and provide educational materials to 1,000 children.',
    progress: '50%',
    involvement: 'Join us as a volunteer teacher or donate educational materials.',
    image: '/images/project2.jpg',
    position: [0.3476, 32.5825], // Kampala, Uganda
    tasks: [
      'Construct school buildings',
      'Distribute educational materials',
      'Train teachers'
    ],
    team: [
      { name: 'Alice Johnson', role: 'Project Manager' },
      { name: 'Bob Brown', role: 'Education Specialist' }
    ],
    milestones: [
      { milestone: 'First school completed', date: '2023-02-20' },
      { milestone: 'Materials distributed', date: '2023-04-15' }
    ],
    resources: 'Budget: $30,000, Volunteers: 15',
    communications: [
      { date: '2023-01-20', message: 'Project kickoff' },
      { date: '2023-03-01', message: 'Progress update meeting' }
    ],
    votes: 0
  },
  {
    title: 'Healthcare Services',
    description: 'Improving healthcare facilities and services in underserved communities.',
    goals: 'Renovate 3 healthcare centers and provide medical supplies.',
    progress: '80%',
    involvement: 'Support us by donating medical supplies or funds for renovation.',
    image: '/images/project3.jpg',
    position: [-1.2921, 36.8219], // Nairobi, Kenya
    tasks: [
      'Renovate healthcare centers',
      'Procure medical supplies',
      'Train healthcare workers'
    ],
    team: [
      { name: 'Charlie Davis', role: 'Project Manager' },
      { name: 'Dana Lee', role: 'Healthcare Specialist' }
    ],
    milestones: [
      { milestone: 'First center renovated', date: '2023-01-30' },
      { milestone: 'Supplies procured', date: '2023-03-25' }
    ],
    resources: 'Budget: $40,000, Volunteers: 10',
    communications: [
      { date: '2023-01-05', message: 'Initial planning meeting' },
      { date: '2023-02-15', message: 'Mid-project review' }
    ],
    votes: 0
  }
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
  const [projects, setProjects] = useState(currentProjects);

  const handleVote = (index, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index].votes = value;
    setProjects(updatedProjects);
  };

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
          {projects.map((project, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure><img src={project.image} alt={project.title} /></figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <p><strong>Goals:</strong> {project.goals}</p>
                <p><strong>Progress:</strong> {project.progress}</p>
                <p><strong>Get Involved:</strong> {project.involvement}</p>
                <p><strong>Tasks:</strong></p>
                <ul>
                  {project.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
                <p><strong>Team Members:</strong></p>
                <ul>
                  {project.team.map((member, memberIndex) => (
                    <li key={memberIndex}>{member.name} - {member.role}</li>
                  ))}
                </ul>
                <p><strong>Milestones:</strong></p>
                <ul>
                  {project.milestones.map((milestone, milestoneIndex) => (
                    <li key={milestoneIndex}>{milestone.milestone} - {milestone.date}</li>
                  ))}
                </ul>
                <p><strong>Resources:</strong> {project.resources}</p>
                <p><strong>Communications:</strong></p>
                <ul>
                  {project.communications.map((communication, communicationIndex) => (
                    <li key={communicationIndex}>{communication.date} - {communication.message}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <label className="block mb-2">Vote on this project:</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={project.votes}
                    onChange={(e) => handleVote(index, e.target.value)}
                    className="range range-primary"
                  />
                  <div className="flex justify-between text-xs px-2">
                    <span>0</span>
                    <span>100</span>
                  </div>
                  <p className="mt-2">Votes: {project.votes}</p>
                </div>
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
    </div>
  );
};

export default Projects;