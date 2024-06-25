import React from 'react';

const communications = [
  {
    sender: 'John Doe',
    receiver: 'Jane Smith',
    message: 'Please provide an update on the water testing progress.',
    date: '2023-03-01',
  },
  {
    sender: 'Jane Smith',
    receiver: 'John Doe',
    message: 'The water testing is 50% complete. We expect to finish by the end of the month.',
    date: '2023-03-02',
  },
];

const CommunicationTable = () => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold mb-4">Communications</h3>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Sender</th>
            <th className="px-4 py-2">Receiver</th>
            <th className="px-4 py-2">Message</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {communications.map((communication, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{communication.sender}</td>
              <td className="border px-4 py-2">{communication.receiver}</td>
              <td className="border px-4 py-2">{communication.message}</td>
              <td className="border px-4 py-2">{communication.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommunicationTable;