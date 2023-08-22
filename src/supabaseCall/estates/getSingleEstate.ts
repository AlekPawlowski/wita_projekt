import { supabase } from "../../config";

export const getSingleEstate = async (id: string) => { 
    const { data: estate, error } = await supabase
        .from('estate')
        .select("*")
        .eq('id', id)
    if(!error){
        return estate[0];
    }else{
        throw new Error(`sadly, there is an error ${error}`)
    }
}