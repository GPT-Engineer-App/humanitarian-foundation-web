import React, { useEffect, useState } from 'react';
import { supabase } from '../integrations/supabase';
import ProjectDetails from '../components/ProjectDetails';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase.from('projects').select('*');
        if (error) throw error;
        setProjects(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-10 bg-base-200 text-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      {projects.map((project) => (
        <ProjectDetails key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsPage;