import { IFailures } from "../interfaces/Ifailures";

export const failureMockResolved: IFailures  = {
    id: "some_id",
    estate_id: "estate id",
    failue_estate_name: "Name of estate",
    failure_title: "Title of resolved failure",
    failure_description: "test description",
    status: true,
    created_at: "10-12-2023"
}

export const failureMock: IFailures  = {
    id: "unresolved_fail",
    estate_id: "estate id",
    failue_estate_name: "Name of estate",
    failure_title: "Title of unresolved Failure",
    failure_description: "test description",
    status: false,
    created_at: "10-12-2023"
}
