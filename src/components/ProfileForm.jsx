import React, { useState } from 'react';

const ProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assuming supabase is defined elsewhere in your project
    const { data, error } = await supabase.from('profiles').insert([{ name, email }]);
    if (error) console.error('Error creating profile:', error);
    else console.log('Profile created:', data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default ProfileForm;