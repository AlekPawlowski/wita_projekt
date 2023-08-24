import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { EstateList } from "./EstateList";


// make from this one generic List
export const EstateListInitlize = () => {
    // const [estates, setEstates] = useState<IEstate[] | null>(null);
    const state = useSelector((state: RootState) => state.user);
    const { user } = state;
    if(!user) return null
    return <EstateList user={user}/>
}