/**
 * interface for single failure description
 * @param estateId -> id of estate assign to this failure
 * @param failure_description -> description of failure
 * @param status -> status of failure, can be: done, to do, in progress
 * @param created_at -> date that failure was added to the registry
 */
export interface IFailure {
    estateId: number;
    failure_descriptions: string;
    status: "done" | "to do" | "in progress";
    created_at: string;
}