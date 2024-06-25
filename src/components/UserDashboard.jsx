import React from 'react';

const UserDashboard = () => {
  // Mock data for user activity and saved content
  const userActivity = [
    { id: 1, type: 'Donation', details: 'Donated $50 to Clean Water Initiative', date: '2023-03-15' },
    { id: 2, type: 'Volunteer', details: 'Signed up for Community Outreach event', date: '2023-03-10' },
  ];

  const savedContent = [
    { id: 1, title: 'Educational Programs in Rural Areas', type: 'Article' },
    { id: 2, title: 'Upcoming Fundraising Gala', type: 'Event' },
  ];

  return (
    <div className="p-10 bg-base-200">
      <h2 className="text-3xl font-bold mb-6">User Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl font-bold mb-4">Recent Activity</h3>
          <ul className="space-y-2">
            {userActivity.map((activity) => (
              <li key={activity.id} className="bg-white p-4 rounded-lg shadow">
                <p className="font-bold">{activity.type}</p>
                <p>{activity.details}</p>
                <p className="text-sm text-gray-500">{activity.date}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Saved Content</h3>
          <ul className="space-y-2">
            {savedContent.map((content) => (
              <li key={content.id} className="bg-white p-4 rounded-lg shadow">
                <p className="font-bold">{content.title}</p>
                <p className="text-sm text-gray-500">{content.type}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;