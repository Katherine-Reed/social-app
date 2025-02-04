
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://lqzqfhvifuhvaivvebbp.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxenFmaHZpZnVodmFpdnZlYmJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2ODQ5MDgsImV4cCI6MjA1NDI2MDkwOH0.Hhq2j_tQZ6YshoGMyYDj7J83W7gao5t7Lp6MlXUwfsM"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase