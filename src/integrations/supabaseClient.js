import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zjnfgenplhctcgqhiryt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqbmZnZW5wbGhjdGNncWhpcnl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyOTE3NTUsImV4cCI6MjAzMTg2Nzc1NX0.J41Pp0l_vgwnCgOwipngeUPVDr5tI-1D-PHr8YLhYaA';

export const supabase = createClient(supabaseUrl, supabaseKey);