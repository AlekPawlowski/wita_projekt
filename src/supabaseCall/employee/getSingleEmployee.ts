import { supabase } from "../../config"

export const getSingleEmployee = async (id: string) => {
    const { data: app_user, error } = await supabase
        .from('app_users')
        .select('*')
        .eq('id', id);
    if (!error) {
        if (app_user.length > 0) return app_user[0]
        return "There is no user with provided id";
    }
    throw new Error(`Error in loading single employee ${error}`)
}