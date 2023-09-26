import { supabase } from "../../config";

export const getAllUsers = async () => {
    const { data: appUsers, error } = await supabase
        .from('app_users')
        .select('*')
    if(!error){
        return appUsers;
    }else {
        throw new Error(`Error in geting all users: ${error}`);
    }
}

export const getOnlyEmloyess = async () => {
    const { data: employees, error } = await supabase
        .from("app_users")
        .select('*')
        .eq('acces_level', "employee")
    if (!error) {
        return employees;
    } else {
        throw new Error(`Error in geting employees: ${error}`);
    }
}

/**
 * Function to get employees depends whitch acces level user have
 */
export const getEmployees = (accesLevel: string) => {
    if (accesLevel === "account") {
        return getOnlyEmloyess();
    }
    return getAllUsers();
}