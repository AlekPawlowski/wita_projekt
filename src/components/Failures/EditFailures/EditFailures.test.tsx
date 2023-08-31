import { render, screen } from "@testing-library/react";
import { describe, test, vi, expect } from "vitest";
import { EditFailures } from "./EditFailures";
import { Router } from "react-router-dom";
import { FAILURE_PARAM_NAME } from "../../../config";
import { act } from "react-dom/test-utils";

vi.mock('../../../supabaseCall/failures/getSingleFailure', () => {
    const failureMoc = {
        id: "unresolved_fail",
        estate_id: "estate id",
        failue_estate_name: "Name of estate",
        failure_title: "Title of unresolved Failure",
        failure_description: "test description",
        status: false,
        created_at: "10-12-2023"
    }
    return ({
        getSingleFailure: vi.fn().mockResolvedValue(failureMoc)
    })
})

describe("test mock api", () => {
    test("should mock api", async () => {
        let wrapper: RenderResult;
        await act(() => {
            wrapper = render(
                <Router location={`/estates/edit?${FAILURE_PARAM_NAME}=123`}>
                    <EditFailures />
                </Router>
            )
        })

        const title = screen.getByText(/Edit failure/)
        const idInputValue = screen.getByDisplayValue(/Title of unresolved Failure/)

        expect(title).toBeTruthy();
        expect(idInputValue).toBeTruthy();
    })
})