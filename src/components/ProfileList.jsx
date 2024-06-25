import React, { useEffect, useState } from 'react';
import { supabase, useSupabase } from '../integrations/supabase';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const { loading, error } = useSupabase();

  useEffect(() => {
    const fetchProfiles = async () => {
      const { data, error } = await supabase.from('profiles').select('*');
      if (error) console.error('Error fetching profiles:', error);
      else setProfiles(data);
    };

    fetchProfiles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Profiles</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <h3>{profile.name}</h3>
            <p>{profile.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;