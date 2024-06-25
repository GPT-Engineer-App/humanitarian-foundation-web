import React, { useState } from 'react';
import { useSupabase } from '../integrations/supabase';
import { supabase } from '../integrations/supabase';

const ProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { loading, error } = useSupabase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('profiles').insert([{ name, email }]);
    if (error) console.error('Error creating profile:', error);
    else console.log('Profile created:', data);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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