import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    bio: 'John has over 20 years of experience in humanitarian work and founded HUFIDA to make a difference in African communities.',
    image: '/images/team/john_doe.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Chief Operations Officer',
    bio: 'Jane oversees all operations at HUFIDA and ensures that our projects are executed efficiently.',
    image: '/images/team/jane_smith.jpg',
  },
  // Add more team members as needed
];

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
  // Add more partners as needed
];

const AboutUs = () => {
  return (
    <div className="p-10 bg-base-200 text-center">
      <section className="mb-10">
        <h2 className="text-3xl font-bold">Our Story</h2>
        <p className="mt-4 text-lg">
          The Humanitarian Foundation for Innovative Development in Africa (HUFIDA) was founded with a vision to transform lives and foster sustainable development in African communities. Our journey began with a simple yet profound mission: to empower communities through innovative solutions that address critical issues such as clean water access, education, healthcare, and economic development.
        </p>
        <p className="mt-4 text-lg">
          Over the years, we have grown into a dynamic organization, driven by a passionate team dedicated to making a tangible impact. Our projects are designed to create lasting change, and we are committed to transparency, accountability, and continuous improvement.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold">Mission and Vision</h2>
        <p className="mt-4 text-lg">
          Our mission is to empower African communities through sustainable development projects. Our vision is a thriving Africa where every community has access to essential resources and opportunities.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold">Our Mission and Vision</h2>
        <div className="mt-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/your-video-id" title="HUFIDA Mission and Vision" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold">Our Impact</h2>
        <div className="mt-4">
          <img src="/images/infographics/impact-infographic.png" alt="HUFIDA Impact Infographic" className="w-full h-auto" />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold">Our Team</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure><img src={member.image} alt={member.name} /></figure>
              <div className="card-body">
                <h2 className="card-title">{member.name}</h2>
                <p className="font-bold">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold">Partners and Sponsors</h2>
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
      </section>
    </div>
  );
};

export default AboutUs;