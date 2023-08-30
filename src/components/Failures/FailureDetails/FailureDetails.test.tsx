import { describe, expect, test } from "vitest"
import { mockEstate } from "../../../_testing_data/mockEstates"
import { failureMockResolved } from "../../../_testing_data/mockFailures";
import { createFailuresContentData } from "./createFailuresContentData";
import { IInformationText } from "../../../interfaces/IInformationText/IInformationText";
import { FailureDetailsContent } from "./FailureDetailsContent";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ESTATE_PARAM_ID, FAILURE_PARAM_NAME } from "../../../config";

describe("Failure details content", () => {
    // Arrange
    const estateData = mockEstate;
    const failureData = failureMockResolved;

    test("failure create content data func test", () => {
        // Arrange
        const { name } = estateData;
        const { failure_description, failure_title, status } = failureData;
        const contentData: IInformationText[] = [
            {
                describe: "Estate name",
                value: name,
            },
            {
                describe: "Failure title",
                value: failure_title,
            },
            {
                describe: "Status",
                value: status ? "Resolved" : "Unresolved"
            },
            {
                describe: "Failure description",
                value: failure_description,
            }
        ]

        // ACT
        const failureContentData = createFailuresContentData(failureData, estateData);

        // Assert
        expect(contentData).toEqual(failureContentData);
    })

    test("Details content check links", () => {
        // arrange
        const estateId = estateData.id,
            failureId = failureData.id, 
            hrefToEstate = `/estates/${estateId}?${ESTATE_PARAM_ID}=${estateId}`,
            hrefToFailureEdit = `/failures/edit?${FAILURE_PARAM_NAME}=${failureId}`;
        // Act
        render(
            <BrowserRouter>
                <FailureDetailsContent failure={failureData} estate={estateData}/>
            </BrowserRouter>
        )
        const LinkEstateElement: HTMLAnchorElement = screen.getByRole('link', {name: "Failure estate"});
        const linkFailureForm: HTMLAnchorElement = screen.getByRole('link', {name: 'Edit failures'});

        // Assert
        expect(LinkEstateElement.href).toBe(hrefToEstate);
        expect(linkFailureForm.href).toBe(hrefToFailureEdit);
    })
})