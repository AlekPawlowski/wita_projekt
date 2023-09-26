import { supabase } from "../../config";
import { IEstate } from "../../interfaces/Iestate";

/**
 * Get all estates from db and return them, if error then render error in console
 */
export const getAllEstates = async () => {
    console.log("send request")
    const { data: incomeEstate, error } = await supabase
        .from('estate')
        .select('*');
    if(!error){
        return incomeEstate;
    }else{
        throw new Error(`Error in getting estates ${error}`)
    }
};
/**
 * call to database to get all estates that belongs to the provided param
 */
export const getAllEstatesByParam = async (paramName: keyof IEstate, paramValue: string) => {
    const {data: filteredEstates, error} = await supabase
            .from("estate")
            .select('*')
            .eq(paramName, paramValue)
    if(!error){
        return filteredEstates
    }else{
        throw new Error(`Error in getting estates for ${paramName} with value ${paramValue} - ${error}`)
    }
}

/**
 * function to split for get data based on:
 * @param accesLevel -> acces level of the user
 * @param phoneNumber -> phone number of the user to get his data
 * @return object that was get from database
 */
export const getEstates = async (accesLevel: string, phoneNumber: number) => {
    console.log(`Getting ${accesLevel}`)
    if(accesLevel == "employee"){
        // get employees
        return getAllEstatesByParam("keeper_phone_number", String(phoneNumber))
    }
    return getAllEstates()
}