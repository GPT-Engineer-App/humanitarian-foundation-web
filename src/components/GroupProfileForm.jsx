import React, { useState } from 'react';
import { supabase, useSupabase } from '../integrations/supabase';

const GroupProfileForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { loading, error } = useSupabase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from('group_profiles').insert([{ name, description }]);
      if (error) throw error;
      console.log('Group profile created:', data);
    } catch (error) {
      console.error('Error creating group profile:', error.message);
    }
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
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Create Group Profile</button>
    </form>
  );
};

export default GroupProfileForm;