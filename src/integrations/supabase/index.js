import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zjnfgenplhctcgqhiryt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqbmZnZW5wbGhjdGNncWhpcnl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyOTE3NTUsImV4cCI6MjAzMTg2Nzc1NX0.J41Pp0l_vgwnCgOwipngeUPVDr5tI-1D-PHr8YLhYaA';

export const supabase = createClient(supabaseUrl, supabaseKey);

export const useSupabase = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example fetch to check connection
        const { data, error } = await supabase.from('example_table').select('*');
        if (error) throw error;
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error };
};