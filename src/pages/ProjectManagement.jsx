import React from 'react';
import ProjectTable from '../components/ProjectTable';
import TaskTable from '../components/TaskTable';
import TeamMemberTable from '../components/TeamMemberTable';
import MilestoneTable from '../components/MilestoneTable';
import ResourceTable from '../components/ResourceTable';
import CommunicationTable from '../components/CommunicationTable';

const ProjectManagement = () => {
  return (
    <div className="p-10 bg-base-200 text-center">
      <h2 className="text-3xl font-bold mb-6">Project Management</h2>
      <ProjectTable />
      <TaskTable />
      <TeamMemberTable />
      <MilestoneTable />
      <ResourceTable />
      <CommunicationTable />
    </div>
  );
};

export default ProjectManagement;