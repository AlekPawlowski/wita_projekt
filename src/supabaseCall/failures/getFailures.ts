import { supabase } from "../../config";

/**
 * The function `getFailures` returns either the failures of a specific estate or all failures
 * depending on the provided estateId.
 * @param {string | null} estateId - The `estateId` parameter is a string that represents the ID of an
 * estate. It can be either a valid string value or `null`.
 * @returns The function `getFailures` returns a promise that resolves to the result of either
 * `getEstateFailures(estateId)` or `getAllFailures()`.
 */
export const getFailures = async (estateId: string | null) => {
    if (estateId) {
        return getEstateFailures(estateId);
    }
    return getAllFailures();
}

/**
 * The function `getAllFailures` retrieves all failures from a database using Supabase and returns
 * them, or throws an error if there was an issue.
 * @returns the `failures` data if there is no error.
 */
export const getAllFailures = async () => {
    const { data: failures, error } = await supabase
        .from('failures')
        .select('*')
    if (!error) {
        return failures;
    } else {
        throw new Error(`Error in getting all failures: ${error}`);
    }
}

/**
 * The function `getEstateFailures` retrieves a list of failures associated with a specific estate ID
 * from a database and returns the failures if there are no errors, otherwise it throws an error
 * message.
 * @param {string} estateId - The `estateId` parameter is a string that represents the ID of an
 * estate. It is used to filter the failures data based on the estate ID.
 * @returns the `failures` data if there is no error.
 */
export const getEstateFailures = async (estateId: string) => {
    const { data: failures, error } = await supabase
        .from('failures')
        .select('*')
        .eq("estate_id", estateId)
    if(!error) {
        return failures;
    }else{
        throw new Error(`Error in getting single failures: ${error}`);
    }
}