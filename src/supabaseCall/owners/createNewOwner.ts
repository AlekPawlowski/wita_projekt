import { supabase } from "../../config";
import { IOwnersSchema } from "../../schema/formSchema";

/**
 * add new record to owner list
 */
export const addNewOnwer = async (dataToAdd: IOwnersSchema) => {
    const { error } = await supabase
        .from('owners')
        .insert([
            {
                ...dataToAdd
            },
        ])
        .select()
    if (!error) {
        console.log("add successfully", 'color: green');
    } else {
        throw new Error(`failed to add to database beacuse ${error}`);
    }
}
/**
 * first function check if provided phone number exist in db, if not, then create record, else give user info that user exist
 */
export const createNewOwner = async (dataToAdd: IOwnersSchema) => {
    
    const { data: owners } = await supabase
    .from('owners')
    .select('phone_number')
    .eq('phone_number', dataToAdd.phone_number)
    
    if (owners?.length == 0) {
        addNewOnwer(dataToAdd);
    }else{
        alert('Prived phone number was already added, check again owner phone number');
    }
}
