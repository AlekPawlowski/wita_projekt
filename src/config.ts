import { createClient } from '@supabase/supabase-js'
import { Database } from "../types/supabase";

// Supabase Config
if (!import.meta.env.VITE_SUPABASE_KEY) {
    throw new Error("nie ma supabase");
}

const supabaseUrl = 'https://onypibxfvhiqwvujtfhg.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

// Global variables
export const ESTATE_PARAM_ID = "estateId";
export const ESTATE_PARAM_NAME = "estateName";
export const FAILURE_PARAM_NAME = "failureId";
export const OWNER_PARAM_NAME = "ownerPhoneNumber";
export const EMPLOYEE_PARAM_NAME = "employeeId";

// visual configs
export const GRID_CONFIG = {
    gap: 3, // numerical from chakra
    elementsInRow: "repeat(3, 1fr)" // 3 elements per row by default
}

export const MARGIN_SPACE = 5;

export const ESTATE_QUERY = "estate"
