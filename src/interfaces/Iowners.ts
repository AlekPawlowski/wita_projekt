import { Database } from "../../types/supabase";

/**
 * Interface that holds information about owner
 * @param name -> owner name
 * @param phone_number -> phone number of owner of the propertie
 */
export type IOwners = Database["public"]["Tables"]["owners"]["Row"]