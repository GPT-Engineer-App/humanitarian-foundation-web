import React, { useState } from 'react';
import ProjectTable from '../components/ProjectTable';
import TaskTable from '../components/TaskTable';
import TeamMemberTable from '../components/TeamMemberTable';
import MilestoneTable from '../components/MilestoneTable';
import ResourceTable from '../components/ResourceTable';
import CommunicationTable from '../components/CommunicationTable';
import { useAddProject, useAddTask, useAddTeamMember, useAddMilestone, useAddResource, useAddCommunication } from '../integrations/supabase/index.js';

const ProjectManagement = () => {
  const [newProject, setNewProject] = useState({ project_name: '', project_description: '', start_date: '', end_date: '', project_status: '' });
  const [newTask, setNewTask] = useState({ task_name: '', task_description: '', assigned_user: '', status: '', priority: '' });
  const [newTeamMember, setNewTeamMember] = useState({ name_alias: '', role: '', contact_info: '' });
  const [newMilestone, setNewMilestone] = useState({ milestone_name: '', milestone_description: '', desired_due_date: '', milestone_status: '', project_id: '' });
  const [newResource, setNewResource] = useState({ resource_type: '', quantity: '', allocation_date: '' });
  const [newCommunication, setNewCommunication] = useState({ sender: '', receiver: '', message: '', date: '' });

  const addProject = useAddProject();
  const addTask = useAddTask();
  const addTeamMember = useAddTeamMember();
  const addMilestone = useAddMilestone();
  const addResource = useAddResource();
  const addCommunication = useAddCommunication();

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    addProject.mutate(newProject);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    addTask.mutate(newTask);
  };

  const handleTeamMemberSubmit = (e) => {
    e.preventDefault();
    addTeamMember.mutate(newTeamMember);
  };

  const handleMilestoneSubmit = (e) => {
    e.preventDefault();
    addMilestone.mutate(newMilestone);
  };

  const handleResourceSubmit = (e) => {
    e.preventDefault();
    addResource.mutate(newResource);
  };

  const handleCommunicationSubmit = (e) => {
    e.preventDefault();
    addCommunication.mutate(newCommunication);
  };

  return (
    <div className="p-10 bg-base-200 text-center">
      <h2 className="text-3xl font-bold mb-6">Project Management</h2>
      
      <form onSubmit={handleProjectSubmit} className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Add New Project</h3>
        <input type="text" placeholder="Project Name" value={newProject.project_name} onChange={(e) => setNewProject({ ...newProject, project_name: e.target.value })} className="input input-bordered w-full mb-2" />
        <textarea placeholder="Project Description" value={newProject.project_description} onChange={(e) => setNewProject({ ...newProject, project_description: e.target.value })} className="textarea textarea-bordered w-full mb-2"></textarea>
        <input type="date" placeholder="Start Date" value={newProject.start_date} onChange={(e) => setNewProject({ ...newProject, start_date: e.target.value })} className="input input-bordered w-full mb-2" />
        <input type="date" placeholder="End Date" value={newProject.end_date} onChange={(e) => setNewProject({ ...newProject, end_date: e.target.value })} className="input input-bordered w-full mb-2" />
        <input type="text" placeholder="Project Status" value={newProject.project_status} onChange={(e) => setNewProject({ ...newProject, project_status: e.target.value })} className="input input-bordered w-full mb-2" />
        <button type="submit" className="btn btn-primary w-full">Add Project</button>
      </form>

      <form onSubmit={handleTaskSubmit} className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Add New Task</h3>
        <input type="text" placeholder="Task Name" value={newTask.task_name} onChange={(e) => setNewTask({ ...newTask, task_name: e.target.value })} className="input input-bordered w-full mb-2" />
        <textarea placeholder="Task Description" value={newTask.task_description} onChange={(e) => setNewTask({ ...newTask, task_description: e.target.value })} className="textarea textarea-bordered w-full mb-2"></textarea>
        <input type="text" placeholder="Assigned User" value={newTask.assigned_user} onChange={(e) => setNewTask({ ...newTask, assigned_user: e.target.value })} className="input input-bordered w-full mb-2" />
        <input type="text" placeholder="Status" value={newTask.status} onChange={(e) => setNewTask({ ...newTask, status: e.target.value })} className="input input-bordered w-full mb-2" />
        <input type="text" placeholder="Priority" value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })} className="input input-bordered w-full mb-2" />
        <button type="submit" className="btn btn-primary w-full">Add Task</button>
      </form>

      <form onSubmit={handleTeamMemberSubmit} className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Add New Team Member</h3>
        <input type="text" placeholder="Name Alias" value={newTeamMember.name_alias} onChange={(e) => setNewTeamMember({ ...newTeamMember, name_alias: e.target.value })} className="input input-bordered w-full mb-2" />
        <input type="text" placeholder="Role" value={newTeamMember.role} onChange={(e) => setNewTeamMember({ ...newTeamMember, role: e.target.value })} className="input input-bordered w-full mb-2" />
        <input type="text" placeholder="Contact Info" value={newTeamMember.contact_info} onChange={(e) => setNewTeamMember({ ...newTeamMember, contact_info: e.target.value })} className="input input-bordered w-full mb-2" />
        <button type="submit" className="btn btn-primary w-full">Add Team Member</button>
      </form>

      <form onSubmit={handleMilestoneSubmit} className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Add New Milestone</h3>
        <input type="text" placeholder="Milestone Name" value={newMilestone.milestone_name} onChange={(e) => setNewMilestone({ ...newMilestone, milestone_name: e.target.value })} className="input input-bordered w-full mb-2" />
        <textarea placeholder="Milestone Description" value={newMilestone.milestone_description} onChange={(e) => setNewMilestone({ ...newMilestone, milestone_description: e.target.value })} className="textarea textarea-bordered w-full mb-2"></textarea>
        <input type="date" placeholder="Desired Due Date" value={newMilestone.desired_due_date} onChange={(e) => setNewMilestone({ ...newMilestone, desired_due_date: e.target.value })} className="input input-bordered w-full mb-2" />
        <input type="text" placeholder="Milestone Status" value={newMilestone.milestone_status} onChange={(e) => setNewMilestone({ ...newMilestone, milestone_status: e.target.value })} className="input input-bordered w-full mb-2" />
        <input type="text" placeholder="Project ID" value={newMilestone.project_id} onChange={(e) => setNewMilestone({ ...newMilestone, project_id: e.target.value })} className="input input-bordered w-full mb-2" />
        <button type="submit" className="btn btn-primary w-full">Add Milestone</button>
      </form>

      <form onSubmit={handleResourceSubmit} className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Add New Resource</h3>
        <input type="text" placeholder="Resource Type" value={newResource.resource_type} onChange={(e) => setNewResource({ ...newResource, resource_type: e.target.value })} className="input input-bordered w-full mb-2" />
        <input type="number" placeholder="Quantity" value={newResource.quantity} onChange={(e) => setNewResource({ ...newResource, quantity: e.target.value })} className="input input-bordered w-full mb-2" />
        <input type="date" placeholder="Allocation Date" value={newResource.allocation_date} onChange={(e) => setNewResource({ ...newResource, allocation_date: e.target.value })} className="input input-bordered w-full mb-2" />
        <button type="submit" className="btn btn-primary w-full">Add Resource</button>
      </form>

      <form onSubmit={handleCommunicationSubmit} className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Add New Communication</h3>
        <input type="text" placeholder="Sender" value={newCommunication.sender} onChange={(e) => setNewCommunication({ ...newCommunication, sender: e.target.value })} className="input input-bordered w-full mb-2" />
        <input type="text" placeholder="Receiver" value={newCommunication.receiver} onChange={(e) => setNewCommunication({ ...newCommunication, receiver: e.target.value })} className="input input-bordered w-full mb-2" />
        <textarea placeholder="Message" value={newCommunication.message} onChange={(e) => setNewCommunication({ ...newCommunication, message: e.target.value })} className="textarea textarea-bordered w-full mb-2"></textarea>
        <input type="date" placeholder="Date" value={newCommunication.date} onChange={(e) => setNewCommunication({ ...newCommunication, date: e.target.value })} className="input input-bordered w-full mb-2" />
        <button type="submit" className="btn btn-primary w-full">Add Communication</button>
      </form>

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