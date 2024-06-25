import React, { useState } from 'react';

const UserProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [privacySettings, setPrivacySettings] = useState({
    showEmail: false,
    showBio: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement profile update logic here
    console.log('Updating profile:', { name, email, bio, profilePicture, privacySettings });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  return (
    <div className="p-10 bg-base-200">
      <h2 className="text-3xl font-bold mb-6">User Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
        />
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="textarea textarea-bordered w-full"
        ></textarea>
        <div>
          <label className="label">Profile Picture</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="file-input file-input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">Privacy Settings</label>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={privacySettings.showEmail}
              onChange={(e) => setPrivacySettings({ ...privacySettings, showEmail: e.target.checked })}
              className="checkbox"
            />
            <span>Show Email</span>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={privacySettings.showBio}
              onChange={(e) => setPrivacySettings({ ...privacySettings, showBio: e.target.checked })}
              className="checkbox"
            />
            <span>Show Bio</span>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-full">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;