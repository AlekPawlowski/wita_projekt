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
 * @param dataToAdd -> data of the new owner
 * @param tellIfExist -> if set as true, then show alert box if user already exist, otherwise only show in console, it is set that way to use this function both in owner form and estate form, but we want to set error message only in owner form
 */
export const createNewOwner = async (dataToAdd: IOwnersSchema, tellIfExist = false) => {
    
    const { data: owners } = await supabase
    .from('owners')
    .select('phone_number')
    .eq('phone_number', dataToAdd.phone_number)
    
    if (owners?.length == 0) {
        addNewOnwer(dataToAdd);
    }else{
        if(tellIfExist){
            alert('Prived phone number was already added, check again owner phone number');
        }else{
            console.log("there is no need to add new element");
        }
    }
}
