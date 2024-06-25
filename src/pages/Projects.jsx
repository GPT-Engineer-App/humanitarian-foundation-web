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
      
      <div className="box mb-6 p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Project List</h2>
        <ProjectList />
        <button className="btn btn-primary mt-4">Add New Project</button>
      </div>
      
      <div className="box mb-6 p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Project Form</h2>
        <ProjectForm />
      </div>
      
      <div className="box mb-6 p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Task List</h2>
        <TaskList />
        <button className="btn btn-primary mt-4">Add New Task</button>
      </div>
      
      <div className="box mb-6 p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Task Form</h2>
        <TaskForm />
      </div>
      
      <div className="box mb-6 p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Milestone List</h2>
        <MilestoneList />
        <button className="btn btn-primary mt-4">Add New Milestone</button>
      </div>
      
      <div className="box mb-6 p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Milestone Form</h2>
        <MilestoneForm />
      </div>
      
      <div className="box mb-6 p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Resource List</h2>
        <ResourceList />
        <button className="btn btn-primary mt-4">Add New Resource</button>
      </div>
      
      <div className="box mb-6 p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Resource Form</h2>
        <ResourceForm />
      </div>
      
      <div className="box mb-6 p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Profile List</h2>
        <ProfileList />
        <button className="btn btn-primary mt-4">Add New Profile</button>
      </div>
      
      <div className="box mb-6 p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Profile Form</h2>
        <ProfileForm />
      </div>
      
      <div className="box mb-6 p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Group Profile List</h2>
        <GroupProfileList />
        <button className="btn btn-primary mt-4">Add New Group Profile</button>
      </div>
      
      <div className="box mb-6 p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Group Profile Form</h2>
        <GroupProfileForm />
      </div>
    </div>
  );
};

export default ProjectsPage;