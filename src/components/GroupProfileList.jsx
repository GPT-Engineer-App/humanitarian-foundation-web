import React, { useEffect, useState } from 'react';
import { supabase } from '../integrations/supabase';

const GroupProfileList = () => {
  const [groupProfiles, setGroupProfiles] = useState([]);
  const { loading, error } = useSupabase();

  useEffect(() => {
    const fetchGroupProfiles = async () => {
      const { data, error } = await supabase.from('group_profiles').select('*');
      if (error) console.error('Error fetching group profiles:', error);
      else setGroupProfiles(data);
    };

    fetchGroupProfiles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Group Profiles</h2>
      <ul>
        {groupProfiles.map((groupProfile) => (
          <li key={groupProfile.id}>
            <h3>{groupProfile.name}</h3>
            <p>{groupProfile.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupProfileList;