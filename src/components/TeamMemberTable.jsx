import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Project Manager',
    contact: 'john.doe@example.com',
  },
  {
    name: 'Jane Smith',
    role: 'Operations Coordinator',
    contact: 'jane.smith@example.com',
  },
];

const TeamMemberTable = () => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold mb-4">Team Members</h3>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Contact</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((member, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{member.name}</td>
              <td className="border px-4 py-2">{member.role}</td>
              <td className="border px-4 py-2">{member.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamMemberTable;