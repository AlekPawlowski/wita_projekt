import { supabase } from "../../config";
import { IFailureSchema } from "../../schema/formSchema";

/**
 * Ads new failure and if it succes
 */
export const addNewFailure = async (dataToAdd: IFailureSchema) => {
    const { error } = await supabase
        .from('failures')
        .insert([
            { ...dataToAdd }
        ])
        .select()
    if(error){
        throw new Error(error.message)
    }
} 