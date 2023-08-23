import { describe, test, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { EstateForm } from './EstateForm'
import { Router } from 'react-router-dom'

describe("Tests for Estate Form", () => {
    test("Renders without errors", () => {
        const wrapper = render( <Router location={''} ><EstateForm formName="Test" /></Router>,{wrapper: BrowserRouter})
        expect(wrapper).toBeTruthy()

        const title=screen.getByText(/Test/)
        
        expect(title).toBeDefined()
    })
     test("Renders without errors", async () => {
        const wrapper = render(
            <Router location={''} >
                <EstateForm formName="Test" />
            </Router>
        )

        const submitButton=screen.getByText(/Add estate/)

        expect(submitButton).toBeDefined();

        await userEvent.click(submitButton)
        // fireEvent.change(input,{target: {value: "dad"}})
        expect(screen.getByText(/minimum 5 letters/)).toBeDefined()
    })
})