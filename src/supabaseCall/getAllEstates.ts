import { supabase } from "../config";

/**
 * Get all estates from db and return them, if error then render error in console
 */
export const getAllEstates = async () => {
    const { data: incomeEstate, error } = await supabase
        .from('estate')
        .select('*');
    if(!error){
        return incomeEstate;
    }else{
        throw new Error(`Error in getting estates ${error}`)
    }
};