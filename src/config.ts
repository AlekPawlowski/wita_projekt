import { createClient } from '@supabase/supabase-js'
import { Database } from "../types/supabase";

if (!import.meta.env.VITE_SUPABASE_KEY) {
    throw new Error("nie ma supabase");
}

const supabaseUrl = 'https://onypibxfvhiqwvujtfhg.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);