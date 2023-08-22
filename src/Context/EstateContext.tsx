import { createContext } from "react"
import { IEstate } from "../interfaces/Iestate"
import { ESTATE_QUERY } from "../config";
import { getAllEstates } from "../supabaseCall/estates/getAllEstates";
import { useQuery } from "@tanstack/react-query"
import { getSafeContext } from "./getSafeContext";

type IEstateContext = {
    estates: IEstate[] | undefined;
}

const EstateContext = createContext<IEstateContext | null>(null);

export const EstateContextProvider  = ({ children}: { children: React.ReactNode}) =>{
    const {data: estates} = useQuery([ESTATE_QUERY], () => getAllEstates());
    return <EstateContext.Provider value={{estates}}>
        {children}
    </EstateContext.Provider>
}

export const useEstateContext = getSafeContext(EstateContext, "EstateContext")