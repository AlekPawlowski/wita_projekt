import { supabase } from "../../config";

export const getOwners = async () => {
    const { data: owners, error } = await supabase
        .from('owners')
        .select('*')
    if (!error) {
        return owners;
    }
    throw new Error(`Could not find owners: ${error}`);
}