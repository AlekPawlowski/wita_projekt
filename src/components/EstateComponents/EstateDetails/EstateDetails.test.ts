import { describe, expect, it } from "vitest";
import { mockEstate } from "../../../_testing_data/mockEstates";
import { CreateFinancialInformation, CreateGeneralInformation, CreateMainInformation } from "./CreateEstateDetailsData";

describe("create estate details sections data", () => {
    describe("Estate main information", () => {
        // ARANGE - mock data
        const { market_price, keeper_name, owner_name, contract_end_date, avibility, revanue } = mockEstate;
        const mainInfoExpected = [
            {
                describe: "Keeper",
                value: keeper_name
            },
            {
                describe: "Owner",
                value: owner_name
            },
            {
                describe: "Contract end",
                value: contract_end_date as string
            },
            {
                describe: "Avibility",
                value: avibility ? "Avail" : "Unavail"
            },
            {
                describe: "Current revanue",
                value: `${revanue} PLN`
            },
            {
                describe: "Market price",
                value: `${market_price} PLN`
            }
        ]
        it('Create main information object', () => {
            //ACT -> create estate obj
            const estate = CreateMainInformation(mockEstate)

            // ASSERT -> test if pass
            expect(estate).toEqual(mainInfoExpected);
        })
    })
    describe("Estate financial information", () => {
        // ARRANGE -> mock data
        const { electricity_amount, electricity_deadline, rent_amount, rent_deadline, tax_amount, tax_deadline } = mockEstate;
        const financialInfoExpected = [
            {
                describe: "Electricity bill deadline",
                value: electricity_deadline
            },
            {
                describe: "Electricity bill ammount",
                value: electricity_amount
            },
            {
                describe: "Rent deadline",
                value: rent_deadline
            },
            {
                describe: "Rent amount",
                value: rent_amount
            },
            {
                describe: "Tax deadline",
                value: tax_deadline
            },
            {
                describe: "Tax amount",
                value: tax_amount
            },

        ];
        it("Create financial information object", () => {
            // ACT -> run function
            const estate = CreateFinancialInformation(mockEstate);
            expect(estate).toEqual(financialInfoExpected)
            // ASSERT -> test 
        })
    })
    describe("Estate general information", () => {
        // ARRANGE -> mock data
        const { keeper_name, keeper_phone_number, door_code, name, adress, owner_name, owner_phone_number, contract_start_data } = mockEstate;
        const generalInformation = [
            {
                describe: "Name of property",
                value: name
            },
            {
                describe: "Adress of property",
                value: adress
            },
            {
                describe: "Owner name and phone number",
                value: `${owner_name}, ${owner_phone_number}`
            },
            {
                describe: "Estate door code",
                value: door_code ? door_code : "-"
            },
            {
                describe: "Current contract start",
                value: contract_start_data ? contract_start_data : "-"
            },
            {
                describe: "Keeper name and phone number",
                value: `${keeper_name}, ${keeper_phone_number}`
            }
        ];
        it("Create general information object", () => {
            // ACT -> run function
            const estate = CreateGeneralInformation(mockEstate);

            // ASSERT -> test 
            expect(estate).toEqual(generalInformation);
        })
    })
})