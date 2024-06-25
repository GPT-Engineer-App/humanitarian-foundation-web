import React from 'react';

const tasks = [
  {
    name: 'Water Testing',
    description: 'Test water quality in targeted areas.',
    assignedTo: 'John Doe',
    status: 'In Progress',
    priority: 'High',
  },
  {
    name: 'School Construction',
    description: 'Oversee the construction of new schools.',
    assignedTo: 'Jane Smith',
    status: 'Not Started',
    priority: 'Medium',
  },
];

const TaskTable = () => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold mb-4">Tasks</h3>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Assigned To</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Priority</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{task.name}</td>
              <td className="border px-4 py-2">{task.description}</td>
              <td className="border px-4 py-2">{task.assignedTo}</td>
              <td className="border px-4 py-2">{task.status}</td>
              <td className="border px-4 py-2">{task.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;