import React from 'react';

const resources = [
  {
    type: 'Water Testing Kits',
    quantity: 50,
    allocationDate: '2023-01-15',
  },
  {
    type: 'Construction Materials',
    quantity: '1000 units',
    allocationDate: '2023-02-20',
  },
];

const ResourceTable = () => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold mb-4">Resources</h3>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Allocation Date</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{resource.type}</td>
              <td className="border px-4 py-2">{resource.quantity}</td>
              <td className="border px-4 py-2">{resource.allocationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResourceTable;