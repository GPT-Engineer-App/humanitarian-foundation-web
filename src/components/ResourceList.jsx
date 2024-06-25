import React, { useEffect, useState } from 'react';
import { supabase, useSupabase } from '../integrations/supabase';

const ResourceList = () => {
  const [resources, setResources] = useState([]);
  const { loading, error } = useSupabase();

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const { data, error } = await supabase.from('resources').select('*');
        if (error) throw error;
        setResources(data);
      } catch (error) {
        console.error('Error fetching resources:', error.message);
      }
    };

    fetchResources();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Resources</h2>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>
            <h3>{resource.name}</h3>
            <p>{resource.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;