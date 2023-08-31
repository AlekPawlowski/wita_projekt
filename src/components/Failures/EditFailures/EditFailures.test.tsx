import { render, screen } from "@testing-library/react";
import { describe, test, vi, expect } from "vitest";
import { EditFailures } from "./EditFailures";
import { Router } from "react-router-dom";
import { FAILURE_PARAM_NAME } from "../../../config";
import { act } from "react-dom/test-utils";

// arrange
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
        // act
        await act(() => {
            render(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <Router location={`/estates/edit?${FAILURE_PARAM_NAME}=123`}>
                    <EditFailures />
                </Router>
            )
        })
        const title = screen.getByText(/Edit failure/)
        const idInputValue = screen.getByDisplayValue(/Title of unresolved Failure/)

        // assert
        expect(title).toBeTruthy();
        expect(idInputValue).toBeTruthy();
    })
})