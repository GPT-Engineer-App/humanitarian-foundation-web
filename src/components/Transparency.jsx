import React from 'react';

const transparencyData = [
  {
    title: 'Clean Water Initiative',
    fundsUsed: '$50,000',
    outcomes: 'Provided clean water to 10,000 people, reduced waterborne diseases by 60%',
  },
  {
    title: 'Educational Programs',
    fundsUsed: '$30,000',
    outcomes: 'Built 5 new schools, provided education to 1,000 children',
  },
  // Add more transparency data as needed
];

const Transparency = () => {
  return (
    <div className="p-10 bg-base-200 text-center">
      <h2 className="text-3xl font-bold">Transparency</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {transparencyData.map((data, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <p><strong>Funds Used:</strong> {data.fundsUsed}</p>
              <p><strong>Outcomes:</strong> {data.outcomes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transparency;