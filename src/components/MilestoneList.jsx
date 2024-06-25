import React, { useEffect, useState } from 'react';
import { supabase, useSupabase } from '../integrations/supabase';

const MilestoneList = () => {
  const [milestones, setMilestones] = useState([]);
  const { loading, error } = useSupabase();

  useEffect(() => {
    const fetchMilestones = async () => {
      const { data, error } = await supabase.from('milestones').select('*');
      if (error) console.error('Error fetching milestones:', error);
      else setMilestones(data);
    };

    fetchMilestones();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Milestones</h2>
      <ul>
        {milestones.map((milestone) => (
          <li key={milestone.id}>
            <h3>{milestone.name}</h3>
            <p>{milestone.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MilestoneList;