/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { FailureRow } from "./FailureRow";
import { failureMock, failureMockResolved } from "../../../_testing_data/mockFailures";
import { Table, Tbody } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";


describe('Failure row tests', () => {
    // arrange
    const resolvedData = failureMockResolved;
    const unResolvedData = failureMock;

    test("Render resolved failure row", () =>{
        // ACT
        const wrapper = render(
            <BrowserRouter >
                <Table>
                    <Tbody>
                        <FailureRow failureDetails={resolvedData}/>
                    </Tbody>
                </Table>
            </BrowserRouter>
        )
        const status = screen.getByText(/Resolved/);
        const title = screen.getByText(/Title of resolved failure/);

        // Assert
        expect(title).toBeTruthy();
        expect(wrapper).toBeTruthy();
        expect(status).toBeDefined();
   })

   test("Render unresolved failure row", () => {
        // ACT
        const wrapper = render(
            <BrowserRouter >
                <Table>
                    <Tbody>
                        <FailureRow failureDetails={unResolvedData}/>
                    </Tbody>
                </Table>
            </BrowserRouter>
        )
        const status = screen.getByText(/Unresolved/);
        const title = screen.getByText(/Title of unresolved Failure/);

        // Assert
        expect(title).toBeTruthy();
        expect(wrapper).toBeTruthy();
        expect(status).toBeDefined();
   })
})