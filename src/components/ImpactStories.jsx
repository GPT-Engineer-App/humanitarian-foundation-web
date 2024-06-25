import React from 'react';

const impactStories = [
  {
    title: 'Clean Water Initiative Success',
    story: 'Thanks to our donors, we have provided clean water to over 10,000 people in rural areas. This has significantly reduced waterborne diseases and improved the quality of life.',
    author: 'John Doe, Community Leader',
    image: '/images/impact1.jpg',
    alt: 'Clean Water Initiative Success Story',
  },
  {
    title: 'Educational Programs Making a Difference',
    story: 'Our educational programs have empowered children through education and skill development. Many children now have access to quality education and a brighter future.',
    author: 'Jane Smith, Teacher',
    image: '/images/impact2.jpg',
    alt: 'Educational Programs Making a Difference Story',
  },
  // Add more stories as needed
];

const ImpactStories = () => {
  return (
    <div className="p-10 bg-base-200 text-center">
      <h2 className="text-3xl font-bold">Impact Stories</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {impactStories.map((story, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure><img src={story.image} alt={story.alt} /></figure>
            <div className="card-body">
              <h2 className="card-title">{story.title}</h2>
              <p>{story.story}</p>
              <p className="font-bold">- {story.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStories;