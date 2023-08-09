import { Fragment, useEffect, useState } from "react"
import { supabase } from "../../config";
import { IEstate } from "../../interfaces/Iestate";

export const EstateList = () => {
    const [estates, setEstates] = useState<IEstate[] | null>(null);
    const getEstates = async () => {
        const { data: incomeEstate, error } = await supabase
            .from('estate')
            .select('*');
        setEstates(incomeEstate);
    };
    useEffect(() => {
        getEstates()
    }, [])

    if (!estates) return null;
    return <Fragment>
        {estates.map((estate) => {
            const { id, name, owner_name } = estate;
            return <p key={id}>{name} {owner_name}</p>
        })}
    </Fragment>
}