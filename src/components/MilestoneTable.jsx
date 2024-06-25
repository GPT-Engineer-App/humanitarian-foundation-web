import React from 'react';

const milestones = [
  {
    name: 'Water Source Identification',
    description: 'Identify potential water sources for the project.',
    dueDate: '2023-03-01',
    status: 'Completed',
  },
  {
    name: 'School Site Selection',
    description: 'Select sites for new school construction.',
    dueDate: '2023-04-15',
    status: 'In Progress',
  },
];

const MilestoneTable = () => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold mb-4">Milestones</h3>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Due Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {milestones.map((milestone, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{milestone.name}</td>
              <td className="border px-4 py-2">{milestone.description}</td>
              <td className="border px-4 py-2">{milestone.dueDate}</td>
              <td className="border px-4 py-2">{milestone.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MilestoneTable;