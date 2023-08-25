import { supabase } from "../../config";
import { IFailureSchema } from "../../schema/formSchema";

export const udpateFailure = async (id: string, dataToUpdate: IFailureSchema) => {
    const { error } = await supabase
        .from('failures')
        .update({ ...dataToUpdate })
        .eq('id', id)
        .select()
    if (!error) {
        alert("Failure data edit successfully");
    } else {
        alert(`Edit was break beacuse of ${error}`)
    }
}