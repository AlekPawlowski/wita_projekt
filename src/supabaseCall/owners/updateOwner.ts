import { supabase } from "../../config";
import { IOwnersSchema } from "../../schema/formSchema";

export const updateOwner = async (ownerPhoneNumber: string, dataToUpdate: IOwnersSchema) => {
    const { data, error } = await supabase
        .from('owners')
        .update({ ...dataToUpdate })
        .eq('phone_number', ownerPhoneNumber)
        .select()
    if(!error) {
        // set in all estates too
    }else{
        throw new Error(`Error in update: ${error}`);
    }
}