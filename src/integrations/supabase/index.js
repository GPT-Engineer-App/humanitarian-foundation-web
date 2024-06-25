import { createClient } from '@supabase/supabase-js';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

import React from "react";
export const queryClient = new QueryClient();
export function SupabaseProvider({ children }) {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
}

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

/* supabase integration types

### resources_table

| name            | type    | format | required |
|-----------------|---------|--------|----------|
| resource_id     | uuid    | string | true     |
| quantity        | numeric | number | true     |
| resource_type   | text    | string | false    |
| allocation_date | date    | string | false    |

### task_table

| name             | type    | format                  | required |
|------------------|---------|-------------------------|----------|
| id               | bigint  | integer                 | true     |
| created_at       | timestamptz | string             | true     |
| task_name        | text    | string                  | false    |
| task_description | text    | string                  | false    |
| assigned_user    | text    | string                  | false    |
| status           | text    | string                  | false    |
| priority         | text    | string                  | false    |

### profile

| name                | type    | format                  | required |
|---------------------|---------|-------------------------|----------|
| user_id             | uuid    | string                  | true     |
| created_at          | timestamptz | string             | true     |
| email               | text    | string                  | false    |
| first_name          | text    | string                  | false    |
| last_name           | text    | string                  | false    |
| address             | text    | string                  | false    |
| phone_number        | varchar | string                  | false    |
| profile_picture_url | text    | string                  | false    |

### milestone_table

| name                | type    | format                  | required |
|---------------------|---------|-------------------------|----------|
| milestone_id        | bigint  | integer                 | true     |
| milestone_name      | text    | string                  | false    |
| milestone_description | text  | string                  | false    |
| created_at          | timestamptz | string             | true     |
| desired_due_date    | date    | string                  | false    |
| milestone_status    | text    | string                  | false    |
| project_id          | integer | integer                 | false    |

### group_profiles

| name         | type    | format                  | required |
|--------------|---------|-------------------------|----------|
| id           | bigint  | integer                 | true     |
| name_alias   | text    | string                  | true     |
| role         | text    | string                  | false    |
| contact_info | text    | string                  | false    |
| user_id      | uuid    | string                  | false    |

### project

| name                | type    | format                  | required |
|---------------------|---------|-------------------------|----------|
| project_id          | integer | integer                 | true     |
| project_name        | varchar | string                  | true     |
| project_description | text    | string                  | false    |
| start_date          | date    | string                  | true     |
| end_date            | date    | string                  | false    |
| project_status      | varchar | string                  | true     |
| creator_of_project  | uuid    | string                  | false    |

*/

// Hooks for resources_table
export const useResourcesTable = () => useQuery({
    queryKey: ['resources_table'],
    queryFn: () => fromSupabase(supabase.from('resources_table').select('*')),
});
export const useAddResource = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newResource) => fromSupabase(supabase.from('resources_table').insert([newResource])),
        onSuccess: () => {
            queryClient.invalidateQueries('resources_table');
        },
    });
};
export const useUpdateResource = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedResource) => fromSupabase(supabase.from('resources_table').update(updatedResource).eq('resource_id', updatedResource.resource_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('resources_table');
        },
    });
};
export const useDeleteResource = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (resource_id) => fromSupabase(supabase.from('resources_table').delete().eq('resource_id', resource_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('resources_table');
        },
    });
};

// Hooks for task_table
export const useTaskTable = () => useQuery({
    queryKey: ['task_table'],
    queryFn: () => fromSupabase(supabase.from('task_table').select('*')),
});
export const useAddTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newTask) => fromSupabase(supabase.from('task_table').insert([newTask])),
        onSuccess: () => {
            queryClient.invalidateQueries('task_table');
        },
    });
};
export const useUpdateTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedTask) => fromSupabase(supabase.from('task_table').update(updatedTask).eq('id', updatedTask.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('task_table');
        },
    });
};
export const useDeleteTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('task_table').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('task_table');
        },
    });
};

// Hooks for profile
export const useProfile = () => useQuery({
    queryKey: ['profile'],
    queryFn: () => fromSupabase(supabase.from('profile').select('*')),
});
export const useAddProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newProfile) => fromSupabase(supabase.from('profile').insert([newProfile])),
        onSuccess: () => {
            queryClient.invalidateQueries('profile');
        },
    });
};
export const useUpdateProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedProfile) => fromSupabase(supabase.from('profile').update(updatedProfile).eq('user_id', updatedProfile.user_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('profile');
        },
    });
};
export const useDeleteProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (user_id) => fromSupabase(supabase.from('profile').delete().eq('user_id', user_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('profile');
        },
    });
};

// Hooks for milestone_table
export const useMilestoneTable = () => useQuery({
    queryKey: ['milestone_table'],
    queryFn: () => fromSupabase(supabase.from('milestone_table').select('*')),
});
export const useAddMilestone = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newMilestone) => fromSupabase(supabase.from('milestone_table').insert([newMilestone])),
        onSuccess: () => {
            queryClient.invalidateQueries('milestone_table');
        },
    });
};
export const useUpdateMilestone = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedMilestone) => fromSupabase(supabase.from('milestone_table').update(updatedMilestone).eq('milestone_id', updatedMilestone.milestone_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('milestone_table');
        },
    });
};
export const useDeleteMilestone = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (milestone_id) => fromSupabase(supabase.from('milestone_table').delete().eq('milestone_id', milestone_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('milestone_table');
        },
    });
};

// Hooks for group_profiles
export const useGroupProfiles = () => useQuery({
    queryKey: ['group_profiles'],
    queryFn: () => fromSupabase(supabase.from('group_profiles').select('*')),
});
export const useAddGroupProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newGroupProfile) => fromSupabase(supabase.from('group_profiles').insert([newGroupProfile])),
        onSuccess: () => {
            queryClient.invalidateQueries('group_profiles');
        },
    });
};
export const useUpdateGroupProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedGroupProfile) => fromSupabase(supabase.from('group_profiles').update(updatedGroupProfile).eq('id', updatedGroupProfile.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('group_profiles');
        },
    });
};
export const useDeleteGroupProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('group_profiles').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('group_profiles');
        },
    });
};

// Hooks for project
export const useProject = () => useQuery({
    queryKey: ['project'],
    queryFn: () => fromSupabase(supabase.from('project').select('*')),
});
export const useAddProject = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newProject) => fromSupabase(supabase.from('project').insert([newProject])),
        onSuccess: () => {
            queryClient.invalidateQueries('project');
        },
    });
};
export const useUpdateProject = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedProject) => fromSupabase(supabase.from('project').update(updatedProject).eq('project_id', updatedProject.project_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('project');
        },
    });
};
export const useDeleteProject = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (project_id) => fromSupabase(supabase.from('project').delete().eq('project_id', project_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('project');
        },
    });
};

// Hooks for communications_table
export const useCommunicationsTable = () => useQuery({
    queryKey: ['communications_table'],
    queryFn: () => fromSupabase(supabase.from('communications_table').select('*')),
});
export const useAddCommunication = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newCommunication) => fromSupabase(supabase.from('communications_table').insert([newCommunication])),
        onSuccess: () => {
            queryClient.invalidateQueries('communications_table');
        },
    });
};
export const useUpdateCommunication = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedCommunication) => fromSupabase(supabase.from('communications_table').update(updatedCommunication).eq('id', updatedCommunication.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('communications_table');
        },
    });
};
export const useDeleteCommunication = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('communications_table').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('communications_table');
        },
    });
};

// Hooks for team_members_table
export const useTeamMembersTable = () => useQuery({
    queryKey: ['team_members_table'],
    queryFn: () => fromSupabase(supabase.from('team_members_table').select('*')),
});
export const useAddTeamMember = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newTeamMember) => fromSupabase(supabase.from('team_members_table').insert([newTeamMember])),
        onSuccess: () => {
            queryClient.invalidateQueries('team_members_table');
        },
    });
};
export const useUpdateTeamMember = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedTeamMember) => fromSupabase(supabase.from('team_members_table').update(updatedTeamMember).eq('id', updatedTeamMember.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('team_members_table');
        },
    });
};
export const useDeleteTeamMember = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('team_members_table').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('team_members_table');
        },
    });
};