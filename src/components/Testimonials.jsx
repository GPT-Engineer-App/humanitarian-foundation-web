import React from 'react';

const testimonials = [
  {
    quote: 'HUFIDA has changed our community for the better. We now have access to clean water and better healthcare.',
    author: 'John Doe, Community Leader',
  },
  {
    quote: 'Volunteering with HUFIDA has been a life-changing experience. I feel like I am making a real difference.',
    author: 'Jane Smith, Volunteer',
  },
  {
    quote: 'The educational programs provided by HUFIDA have given my children a brighter future.',
    author: 'Mary Johnson, Beneficiary',
  },
];

const Testimonials = () => {
  return (
    <div className="p-10 bg-base-200 text-center">
      <h2 className="text-3xl font-bold">Testimonials</h2>
      <div className="mt-4 space-y-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 bg-white shadow rounded animate-fade-in">
            <p className="italic">"{testimonial.quote}"</p>
            <p className="mt-2 font-bold">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;