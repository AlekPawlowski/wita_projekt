import { supabase } from "../../config";
import { IFailureSchema } from "../../schema/formSchema";

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