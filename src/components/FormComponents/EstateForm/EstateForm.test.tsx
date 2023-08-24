import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { EstateForm } from './EstateForm'
import { Router } from 'react-router-dom'

describe("Tests for Estate Form", () => {
    const wrapper = render(<Router location={''} ><EstateForm formName="Test" /></Router>)
    test("Renders without errors", () => {
        expect(wrapper).toBeTruthy()
        
        const title = screen.getByText(/Test/)

        expect(title).toBeDefined()
    })
    test("test click submit without any data", async () => {
        const submitButton = screen.getByText(/Add estate/)

        expect(submitButton).toBeDefined();

        await userEvent.click(submitButton)
        // fireEvent.change(input,{target: {value: "dad"}})
        expect(screen.getByText(/minimum 5 letters/)).toBeDefined()
    })
})