import React from 'react';

const partners = [
  {
    name: 'Partner 1',
    description: 'Partner 1 has been a key supporter of HUFIDA’s initiatives.',
    logo: '/images/partners/partner1.png',
  },
  {
    name: 'Partner 2',
    description: 'Partner 2 provides essential resources for our projects.',
    logo: '/images/partners/partner2.png',
  },
  {
    name: 'Partner 3',
    description: 'Partner 3 supports our community outreach programs.',
    logo: '/images/partners/partner3.png',
  },
];

const PartnersPage = () => {
  return (
    <div className="p-10 bg-base-200 text-center">
      <h2 className="text-3xl font-bold">Our Partners and Sponsors</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {partners.map((partner, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure><img src={partner.logo} alt={partner.name} /></figure>
            <div className="card-body">
              <h2 className="card-title">{partner.name}</h2>
              <p>{partner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;