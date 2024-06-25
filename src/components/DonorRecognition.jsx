import React from 'react';

const donors = [
  {
    name: 'John Doe',
    message: 'Thank you for your generous support!',
  },
  {
    name: 'Jane Smith',
    message: 'Your donation is making a difference!',
  },
  // Add more donors as needed
];

const DonorRecognition = () => {
  return (
    <div className="p-10 bg-base-200 text-center">
      <h2 className="text-3xl font-bold">Donor Recognition</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {donors.map((donor, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{donor.name}</h2>
              <p>{donor.message}</p>
              {/* If an image is added, ensure to include an alt attribute with descriptive text */}
              {/* Example: <img src="path/to/image.jpg" alt="Descriptive text about the image" /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorRecognition;