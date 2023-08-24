import { Dispatch, SetStateAction, createContext, useState } from "react";
import { IEstate } from "../interfaces/Iestate";
import { getSafeContext } from "./getSafeContext";

type IEstateContext = {
    estates: IEstate[] | null;
    setEstates: Dispatch<SetStateAction<IEstate[] | null>>;
}

const EstateContext = createContext<IEstateContext | null>(null);

export const EstateContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [estates, setEstates] = useState<IEstate[] | null>(null);

    return <EstateContext.Provider value={{estates, setEstates}}>
        {children}
    </EstateContext.Provider>
}

export const useEstateContext = getSafeContext(EstateContext, "EstateContext")