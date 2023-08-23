/**
 * types:
 * @param id -> id in database
 * @param adress -> adress of the estate
 * @param avibility -> avibility of the estate (is it rent or on market)
 * @param contract_end_date -> time when current contract end's
 * @param contract_start_data -> time when current contract start's
 * @param door_code -> (optional value) door code to propertie
 * @param keeper_name -> name of our employee that keep's this estate
 * @param market_price -> price of the estate if we decide to sold it
 * @param name -> name of the propertie's (like "Villa Nova")
 * @param owner_name -> name of the estate owner
 * @param owner_phone_number -> phone number of the estate owner (in format 123456789, only numbers)
 * @param revanue -> current revanue of the estate (rent - (tax + electricity))
 * @param electricity_amount -> price of the electricity bill
 * @param electricity_deadline -> deadline of the electricity bill
 * @param rent_amount -> rent price for this estate
 * @param rent_deadline -> deadline of the rent price, when contractor need to pay
 * @param tax_amount -> tax price for this estate
 * @param tax_deadline -> deadline of the tax price
 * @param create_at (optional) -> time of creation of the element
 * @param pictures (current optional) -> id of pictures from db
 */
export interface IEstate {
    id: number | string; 
    adress: string | null
    avibility: boolean | null
    contract_end_date?: string | null
    contract_start_data?: string | null
    door_code?: string | null
    keeper_name: string | null
    market_price: number | null
    name: string | null
    owner_name: string | null
    owner_phone_number: number | null
    revanue: number | null
    electricity_amount: number | null
    electricity_deadline: string | null
    rent_amount: number | null
    rent_deadline: string | null
    tax_amount: number | null
    tax_deadline: string | null
    created_at?: string | null
    pictures?: [] | null 
}