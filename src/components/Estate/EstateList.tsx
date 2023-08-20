import { Fragment, useEffect, useState } from "react"
import { supabase } from "../../config";
import { IEstate } from "../../interfaces/Iestate";
import { getAllEstates } from "../../supabaseCall/getEstates";

export const EstateList = () => {
    const [estates, setEstates] = useState<IEstate[] | null>(null);

    useEffect(() => {
        const callEstates = async() => {
            const estatesList = await getAllEstates();
            setEstates(estatesList);
        }
        callEstates();
    }, [])

    if (!estates) return null;
    return <Fragment>
        {estates.map((estate) => {
            const { id, name, owner_name } = estate;
            return <p key={id}>{name} {owner_name}</p>
        })}
    </Fragment>
}