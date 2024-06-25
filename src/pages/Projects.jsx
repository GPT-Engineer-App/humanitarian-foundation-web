import React from 'react';
import ProjectList from '../components/ProjectList';
import ProjectForm from '../components/ProjectForm';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import MilestoneList from '../components/MilestoneList';
import MilestoneForm from '../components/MilestoneForm';
import ResourceList from '../components/ResourceList';
import ResourceForm from '../components/ResourceForm';
import ProfileList from '../components/ProfileList';
import ProfileForm from '../components/ProfileForm';
import GroupProfileList from '../components/GroupProfileList';
import GroupProfileForm from '../components/GroupProfileForm';

const ProjectsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ProjectList />
      <ProjectForm />
      <TaskList />
      <TaskForm />
      <MilestoneList />
      <MilestoneForm />
      <ResourceList />
      <ResourceForm />
      <ProfileList />
      <ProfileForm />
      <GroupProfileList />
      <GroupProfileForm />
    </div>
  );
};

export default ProjectsPage;