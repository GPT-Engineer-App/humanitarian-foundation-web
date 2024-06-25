import React, { useEffect, useState } from 'react';
import { useSupabase } from '../integrations/supabase';
import { supabase } from '../integrations/supabase';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const { loading, error } = useSupabase();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data, error } = await supabase.from('tasks').select('*');
        if (error) throw error;
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error.message);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;