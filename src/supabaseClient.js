import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://miczyahlbkmhvxdbmhhm.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pY3p5YWhsYmttaHZ4ZGJtaGhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5NDgzODcsImV4cCI6MTk5MTUyNDM4N30.0_CWi0qKoLu_hZGLgHsjRTEHtId93UIWvSyenjoVXWI"
);
