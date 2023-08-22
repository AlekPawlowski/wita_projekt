import { supabase } from "../../config";
import { IAddEstateSchema } from "../../schema/formSchema";
interface IUpdateEstate {
    (
        dataToUpdate: IAddEstateSchema,
        id: string | number,
        cb?: void
    ): void
}
export const updateEstate: IUpdateEstate = async (dataToUpdate, id, cb) => {
    const { error } = await supabase
        .from('estate')
        .update({ ...dataToUpdate })
        .eq('id', id)
        .select()
    if(!error){
        alert("Estate data edit successfully");
    }else{
        alert(`Edit was break beacuse of ${error}`)
    }
    cb
}