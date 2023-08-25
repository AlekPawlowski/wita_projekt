import { Box, Heading, Select } from "@chakra-ui/react"
import { IEstate, IEstateFailData } from "../../interfaces/Iestate"
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react"
import { MARGIN_SPACE } from "../../config";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { getEstates } from "../../supabaseCall/estates/getAllEstates";

type IEstateSelectBox = {
    title: string;
    setEstate: Dispatch<SetStateAction<IEstateFailData | null>>
}
/**
 * Select from list estate and update it by useState hook
 */
export const EstateSelectBox = ({ title, setEstate }: IEstateSelectBox) => {
    // get all estates
    const [estates, setEstates] = useState<IEstate[] | null>(null);
    const state = useSelector((state: RootState) => state.user);
    const { user } = state;
    useEffect(() => {
        if (user) {
            const callEstates = async () => {
                const { acces_level, phone_number } = user;
                const estatesList = await getEstates(acces_level, phone_number)
                setEstates(estatesList);
            }
            callEstates();
        }
    }, []);
    const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const id = event.target.value;
        const name = event.target.dataset.name;
        if(id){
            const estate = {
                id: id,
                name: name ? "" : "name"
            }
            setEstate(estate);
        }
    }
    if(!estates) return <p>there is no estates</p>
    return <Box>
        <Heading as="h2" size="md" my={MARGIN_SPACE}>{title}</Heading>
        <Select placeholder='Select estate' onChange={selectChange}>
            {estates.map((estate)=> {
                const {name, id} = estate;
                return <option key={id} value={id} data-name={name}>{name}</option>
            })}
        </Select>
    </Box>
}