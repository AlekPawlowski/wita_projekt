import { supabase } from "../../config";

export const getSingleFailure = async (id: string) => {
    const { data: failures, error } = await supabase
        .from('failures')
        .select("*")
        .eq('id', id)
    if(!error){
        console.log(failures)
        return failures[0];
    }else{
        throw new Error(`There is an error importing singel failure ${error}`)
    }
}