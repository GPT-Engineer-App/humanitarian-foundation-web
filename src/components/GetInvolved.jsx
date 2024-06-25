import React, { useState } from 'react';

const volunteerOpportunities = [
  {
    title: 'Community Outreach',
    description: 'Engage with local communities to spread awareness about our projects and initiatives.',
  },
  {
    title: 'Event Planning',
    description: 'Help organize and execute our events to ensure they run smoothly.',
  },
  {
    title: 'Fundraising',
    description: 'Assist in planning and executing fundraising campaigns.',
  },
];

const donationOptions = [
  {
    type: 'One-Time Donation',
    description: 'Make a one-time contribution to support our projects.',
  },
  {
    type: 'Monthly Donation',
    description: 'Provide ongoing support with a monthly donation.',
  },
  {
    type: 'Sponsorship',
    description: 'Sponsor a specific project or initiative.',
  },
];

const fundraisingTips = [
  'Share your fundraising campaign on social media.',
  'Host a fundraising event in your community.',
  'Partner with local businesses to support your campaign.',
];

const upcomingEvents = [
  {
    title: 'Annual Charity Gala',
    date: 'December 15, 2023',
    description: 'Join us for an evening of celebration and fundraising.',
  },
  {
    title: 'Community Clean-Up',
    date: 'January 20, 2024',
    description: 'Help us clean up and beautify local neighborhoods.',
  },
];

const predefinedDonations = [
  { amount: 10, description: 'Provide school supplies for one child.' },
  { amount: 25, description: 'Provide clean water for a family for a month.' },
  { amount: 50, description: 'Support healthcare services for a community.' },
  { amount: 100, description: 'Fund a community development project.' },
];

const GetInvolved = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [recurring, setRecurring] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission logic here
    console.log('Donation submitted:', { donationAmount, recurring, paymentMethod });
  };

  return (
    <div className="p-10 bg-base-200 text-center">
      <section className="mb-10">
        <h2 className="text-3xl font-bold">Volunteer Opportunities</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {volunteerOpportunities.map((opportunity, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{opportunity.title}</h2>
                <p>{opportunity.description}</p>
              </div>
            </div>
          ))}
        </div>
        <form className="mt-6">
          <h3 className="text-2xl font-bold">Volunteer Application</h3>
          <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs mt-2" />
          <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs mt-2" />
          <textarea placeholder="Why do you want to volunteer?" className="textarea textarea-bordered w-full max-w-xs mt-2"></textarea>
          <button className="btn btn-primary mt-2">Apply</button>
        </form>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold">Donate</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {donationOptions.map((option, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{option.type}</h2>
                <p>{option.description}</p>
                <button className="btn btn-primary mt-2">Donate</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold">Fundraise</h2>
        <div className="mt-4">
          <h3 className="text-2xl font-bold">Tips for Successful Fundraising</h3>
          <ul className="list-disc list-inside mt-4">
            {fundraisingTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold">Events</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{event.title}</h2>
                <p><strong>Date:</strong> {event.date}</p>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold">Make a Donation</h2>
        <form onSubmit={handleDonationSubmit} className="space-y-4">
          <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" required />
          <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" required />
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Select Donation Amount</h3>
            {predefinedDonations.map((donation, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  name="donationAmount"
                  value={donation.amount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="radio radio-primary"
                  required
                />
                <label className="ml-2">{`$${donation.amount} - ${donation.description}`}</label>
              </div>
            ))}
            <div className="flex items-center">
              <input
                type="radio"
                name="donationAmount"
                value="custom"
                onChange={(e) => setDonationAmount(e.target.value)}
                className="radio radio-primary"
              />
              <input
                type="number"
                placeholder="Custom Amount"
                className="input input-bordered w-full max-w-xs ml-2"
                onChange={(e) => setDonationAmount(e.target.value)}
                disabled={donationAmount !== 'custom'}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Payment Method</h3>
            <select
              className="select select-bordered w-full max-w-xs"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="" disabled>Select Payment Method</option>
              <option value="creditCard">Credit/Debit Card</option>
              <option value="paypal">PayPal</option>
              <option value="mobilePayment">Mobile Payment</option>
            </select>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={recurring}
              onChange={(e) => setRecurring(e.target.checked)}
            />
            <label className="ml-2">Make this a monthly recurring donation</label>
          </div>
          <button type="submit" className="btn btn-primary">Donate</button>
        </form>
      </section>
    </div>
  );
};

export default GetInvolved;