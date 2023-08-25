import { Database } from "../../types/supabase";

/**
 * types:
 * @param id -> id in database
 * @param adress -> adress of the estate
 * @param avibility -> avibility of the estate (is it rent or on market)
 * @param contract_end_date -> time when current contract end's
 * @param contract_start_data -> time when current contract start's
 * @param door_code -> (optional value) door code to propertie
 * @param keeper_name -> name of our employee that keep's this estate
 * @param keeper_phone_number -> phone number of the employee that keep's this estate
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
export type IEstate=Database["public"]["Tables"]["estate"]["Row"]

export type IEstateFailData = {
    id: Database["public"]["Tables"]["estate"]["Row"]["id"],
    name: Database["public"]["Tables"]["estate"]["Row"]["name"],
}