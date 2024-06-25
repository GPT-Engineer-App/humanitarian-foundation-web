import React, { useState } from 'react';
import { useSupabase } from '../integrations/supabase';
import { supabase } from '../integrations/supabase';

const TaskForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { loading, error } = useSupabase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from('tasks').insert([{ name, description }]);
      if (error) throw error;
      console.log('Task created:', data);
    } catch (error) {
      console.error('Error creating task:', error.message);
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
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;