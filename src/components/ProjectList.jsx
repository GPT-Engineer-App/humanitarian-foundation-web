import React, { useEffect, useState } from 'react';
import { supabase, useSupabase } from '../integrations/supabase';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const { loading, error } = useSupabase();

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from('projects').select('*');
      if (error) console.error('Error fetching projects:', error);
      else setProjects(data);
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;