import { supabase } from "../../config";
import { IAddEstateSchema } from "../../schema/formSchema";
import { createNewOwner } from "../owners/createNewOwner";
interface IUpdateEstate {
    (
        dataToUpdate: IAddEstateSchema,
        id: string | number,
    ): void
}
export const updateEstate: IUpdateEstate = async (dataToUpdate: IAddEstateSchema, id: string | number) => {
    const { error } = await supabase
        .from('estate')
        .update({ ...dataToUpdate })
        .eq('id', id)
        .select()
    if(!error){
        // check if owner exist, if not, create new one
        const { owner_name, owner_phone_number } = dataToUpdate;
        createNewOwner(
            {
                name: owner_name,
                phone_number: owner_phone_number
            }
        )
        alert("Estate data edit successfully");
    }else{
        alert(`Edit was break beacuse of ${error}`)
    }
}