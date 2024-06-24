import React from 'react';

const QuickLinks = () => {
  return (
    <div className="p-10 bg-base-200 text-center">
      <h2 className="text-3xl font-bold">Quick Links</h2>
      <div className="mt-4 flex justify-center space-x-4">
        <button className="btn btn-primary">Donate</button>
        <button className="btn btn-secondary">Volunteer</button>
        <button className="btn btn-accent">Latest News</button>
      </div>
    </div>
  );
};

export default QuickLinks;