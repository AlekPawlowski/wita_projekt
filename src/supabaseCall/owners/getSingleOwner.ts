import { supabase } from "../../config"

export const getSingleOwner = async (phoneNumber: string) => {
    const { data: owners, error } = await supabase
        .from('owners')
        .select("*")
        .eq('phone_number', phoneNumber)

    if(!error) {
        return owners[0];
    }
    throw new Error(`Could not find owner ${error}`)
}