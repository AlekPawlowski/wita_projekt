import { supabase } from "../../config"
import { IAddEstateSchema } from "../../schema/formSchema"
import { createNewOwner } from "../owners/createNewOwner"

export const createNewEstate = async (dataToAdd: IAddEstateSchema) => {
    /**
        * first check if estate that we wanna add exist in db
        * by given params:
        * @param adress -> estate adress
        * @param owner_name -> owner of the estate
        * 
        */
    const { data: estate, error } = await supabase
        .from('estate')
        .select("*")
        .eq('adress', dataToAdd.adress)
        .eq('owner_name', dataToAdd.owner_name)

    if (error) {
        throw new Error(`erorr in find element ${error}`)
    }
    // if estate exist and it's length is greater then 0, then privided data exist in db so there is no need to send it.
    // just put alert on the screen so the user can know that it's exist
    if (estate && estate.length !== 0) {
        alert("this estate exist in db, add diffrent estate")
    } else {
        const { data: newEstate, error } = await supabase
            .from('estate')
            .insert([
                { ...dataToAdd },
            ])
            .select()

        if (error) {
            throw new Error(`erorr in push to db ${error}`)
        }
        console.log(newEstate);
        // check if owner exist, if not, create new one
        const { owner_name, owner_phone_number } = dataToAdd;
        createNewOwner(
            {
                name: owner_name,
                phone_number: owner_phone_number
            }
        )
        alert("Correctly added to datebase");
    }
}