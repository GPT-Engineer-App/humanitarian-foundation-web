import React from 'react';

const awarenessContent = [
  {
    title: 'Development Issues in Africa',
    content: 'Africa faces numerous development challenges including poverty, lack of access to clean water, education, and healthcare. Understanding these issues is the first step towards making a difference.',
    image: '/images/awareness/development_issues.jpg',
  },
  {
    title: 'Educational Resources',
    content: 'We provide a variety of educational resources to help you understand the complexities of development work in Africa. From articles to infographics, our resources are designed to inform and inspire.',
    image: '/images/awareness/educational_resources.jpg',
  },
  {
    title: 'News Updates',
    content: 'Stay updated with the latest news on our projects and initiatives. Learn about the impact we are making and how you can get involved.',
    image: '/images/awareness/news_updates.jpg',
  },
];

const Awareness = () => {
  return (
    <div className="p-10 bg-base-200 text-center">
      <h2 className="text-3xl font-bold">Awareness and Education</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {awarenessContent.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure><img src={item.image} alt={item.title} /></figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awareness;