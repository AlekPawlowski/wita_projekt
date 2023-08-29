import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { EstateForm } from './EstateForm'
import { Router } from 'react-router-dom'
import { mockErrorEstate, mockEstate } from '../../../_testing_data/mockEstates';

describe("Tests for Estate Form", () => {
    test("Renders without errors", () => {
        const wrapper = render(
            <Router location={''} >
                <EstateForm formName="Test" />
            </Router>
        )

        expect(wrapper).toBeTruthy()
        const title = screen.getByText(/Test/)

        expect(title).toBeDefined()
    })
    test("test estate form without data", async () => {
        const wrapper = render(
            <Router location={''} >
                <EstateForm formName="Test" />
            </Router>
        )
        const submitButton = screen.getByText(/Add estatess/)

        expect(submitButton).toBeDefined();

        await userEvent.click(submitButton)
        // fireEvent.change(input,{target: {value: "dad"}})
        expect(screen.getByText(/minimum 5 letters/)).toBeDefined()
    })

    test("test estate form with test data", async () => {
        const wrapper = render(
            <Router location={''} >
                <EstateForm formName="Test" data={mockErrorEstate} />
            </Router>
        )
        const submitButton = screen.getByText(/Edit estate/)

        expect(submitButton).toBeDefined();

        await userEvent.click(submitButton)
        expect(screen.getByText(/minimum 5 letters/)).toBeDefined()
    })
})