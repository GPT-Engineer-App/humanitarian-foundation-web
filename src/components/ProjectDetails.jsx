import React, { useEffect, useState } from 'react';
import { supabase } from '../integrations/supabase';

const ProjectDetails = ({ project }) => {
  const [tasks, setTasks] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [milestones, setMilestones] = useState([]);
  const [resources, setResources] = useState([]);
  const [communications, setCommunications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const [tasksData, teamMembersData, milestonesData, resourcesData, communicationsData] = await Promise.all([
          supabase.from('tasks').select('*').eq('project_id', project.id),
          supabase.from('team_members').select('*').eq('project_id', project.id),
          supabase.from('milestones').select('*').eq('project_id', project.id),
          supabase.from('resources').select('*').eq('project_id', project.id),
          supabase.from('communications').select('*').eq('project_id', project.id),
        ]);

        if (tasksData.error) throw tasksData.error;
        if (teamMembersData.error) throw teamMembersData.error;
        if (milestonesData.error) throw milestonesData.error;
        if (resourcesData.error) throw resourcesData.error;
        if (communicationsData.error) throw communicationsData.error;

        setTasks(tasksData.data);
        setTeamMembers(teamMembersData.data);
        setMilestones(milestonesData.data);
        setResources(resourcesData.data);
        setCommunications(communicationsData.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [project.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="card bg-base-100 shadow-xl mb-6">
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p>{project.description}</p>

        <h3 className="text-2xl font-bold mt-4">Tasks</h3>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.name}: {task.description}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold mt-4">Team Members</h3>
        <ul>
          {teamMembers.map((member) => (
            <li key={member.id}>{member.name}: {member.role}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold mt-4">Milestones</h3>
        <ul>
          {milestones.map((milestone) => (
            <li key={milestone.id}>{milestone.name}: {milestone.description}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold mt-4">Resources</h3>
        <ul>
          {resources.map((resource) => (
            <li key={resource.id}>{resource.name}: {resource.description}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold mt-4">Communications</h3>
        <ul>
          {communications.map((communication) => (
            <li key={communication.id}>{communication.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;