import { supabase } from "../../config";

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
 * call to database to get all estates that belongs to the employee
 */
export const getAllEmployeeEstates = async (keeperPhoneNumber: string) => {
    const {data: filteredEstates, error} = await supabase
            .from("estate")
            .select('*')
            .eq('keeper_phone_number', keeperPhoneNumber)
    if(!error){
        return filteredEstates
    }else{
        throw new Error(`Error in getting estates for employee ${keeperPhoneNumber} - ${error}`)
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
        return getAllEmployeeEstates(String(phoneNumber))
    }
    return getAllEstates()
}