import React, { useState } from 'react';
import { useSupabase } from '../integrations/supabase';
import { supabase } from '../integrations/supabase';

const ProjectForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { loading, error } = useSupabase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('projects').insert([{ name, description }]);
    if (error) console.error('Error creating project:', error);
    else console.log('Project created:', data);
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
      <button type="submit">Create Project</button>
    </form>
  );
};

export default ProjectForm;