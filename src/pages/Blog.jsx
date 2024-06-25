import React from 'react';

const blogPosts = [
  {
    title: 'Empowering Communities through Clean Water',
    date: 'October 10, 2023',
    excerpt: 'Learn how HUFIDA is providing access to clean and safe drinking water in rural areas.',
    content: 'Full content about how HUFIDA is providing access to clean and safe drinking water in rural areas. This includes detailed information about the projects, the impact on the communities, and future plans.',
    image: '/images/blog1.jpg',
    alt: 'Empowering Communities through Clean Water Blog Post',
  },
  {
    title: 'Educational Programs Making a Difference',
    date: 'September 20, 2023',
    excerpt: 'Our educational programs are empowering children through education and skill development.',
    content: 'Full content about our educational programs, including success stories, detailed descriptions of the programs, and the impact on the children and communities.',
    image: '/images/blog2.jpg',
    alt: 'Educational Programs Making a Difference Blog Post',
  },
  // Add more blog posts as needed
];

const BlogPage = () => {
  return (
    <div className="p-10 bg-base-200 text-center">
      <h2 className="text-3xl font-bold">Blog</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogPosts.map((post, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure><img src={post.image} alt={post.alt} /></figure>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p>{post.excerpt}</p>
              <button className="btn btn-link">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;