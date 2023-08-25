import { supabase } from "../../config";

export const getSingleEstate = async (id: string) => { 
    const { data: estate, error } = await supabase
        .from('estate')
        .select("*")
        .eq('id', id)
    if(!error){
        console.log(estate)
        return estate[0];
    }else{
        throw new Error(`sadly, there is an error ${error}`)
    }
}

/**
 * The function `getEstateMainInfo` retrieves the main information of an estate from a database using
 * its ID.
 * @param {string} id - The `id` parameter is a string that represents the unique identifier of an
 * estate. It is used to query the estate table in the Supabase database and retrieve the main
 * information of a specific estate.
 * @returns the main information of an estate, which includes the estate's ID and name.
 */
export const getEstateMainInfo = async (id: string) => { 
    const { data: estate, error } = await supabase
        .from('estate')
        .select(`
            id,
            name
        `)
        .eq('id', id)
    if(!error){
        console.log(estate)
        return estate[0];
    }else{
        throw new Error(`sadly, there is an error ${error}`)
    }
}