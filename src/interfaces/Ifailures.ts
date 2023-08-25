import { Database } from "../../types/supabase";

/**
 * interface for single failure description
 * @param id -> id of the failure
 * @param estateId -> id of estate assign to this failure
 * @param failure_description -> description of failure
 * @param failure_title -> title of failure
 * @param status -> status of failure, can be: done, to do, in progress
 * @param created_at -> date that failure was added to the registry
 */
export type IFailures = Database["public"]["Tables"]["failures"]["Row"]