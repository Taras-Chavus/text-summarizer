import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dxmjwszeqejgkmvfqyxf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4bWp3c3plcWVqZ2ttdmZxeXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3NTY5NTcsImV4cCI6MjA0OTMzMjk1N30.zU-gmvC2-F1PffFbQd1vEmgpYVAodFSi1J7CeUgd71g";

export const supabase = createClient(supabaseUrl, supabaseKey);
