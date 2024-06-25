import React from 'react';

const projects = [
  {
    name: 'Clean Water Initiative',
    description: 'Providing access to clean and safe drinking water in rural areas.',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    status: 'Ongoing',
  },
  {
    name: 'Educational Programs',
    description: 'Empowering children through education and skill development.',
    startDate: '2023-02-01',
    endDate: '2023-11-30',
    status: 'Ongoing',
  },
];

const ProjectTable = () => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold mb-4">Projects</h3>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Start Date</th>
            <th className="px-4 py-2">End Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{project.name}</td>
              <td className="border px-4 py-2">{project.description}</td>
              <td className="border px-4 py-2">{project.startDate}</td>
              <td className="border px-4 py-2">{project.endDate}</td>
              <td className="border px-4 py-2">{project.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;