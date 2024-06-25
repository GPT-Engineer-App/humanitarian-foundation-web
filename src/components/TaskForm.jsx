import React, { useState, useEffect } from 'react';
import { useSupabaseClient } from '../integrations/supabaseClient';
import { supabase } from '../integrations/supabaseClient';

const TaskForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const supabaseClient = useSupabaseClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { data, error } = await supabaseClient.from('tasks').insert([{ name, description }]);
    if (error) {
      console.error('Error creating task:', error);
      setError(error.message);
    } else {
      console.log('Task created:', data);
    }
    setLoading(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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