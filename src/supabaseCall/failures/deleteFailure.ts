import { supabase } from "../../config"

/**
 * The function `deleteFailure` deletes a failure record from a Supabase table based on the provided
 * ID.
 * @param {string} id - The `id` parameter is a string that represents the unique identifier of the
 * failure record that you want to delete from the 'failures' table.
 */
export const deleteFailure = async (id: string) => {
    const { error } = await supabase
        .from('failures')
        .delete()
        .eq('id', id)

    if(error) {
        throw new Error(`Error in removing failure: ${error}`)
    }
}