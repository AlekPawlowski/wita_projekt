import { supabase } from "../config";

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