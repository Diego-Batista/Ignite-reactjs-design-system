import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { SignIn } from './SignIn'
import { rest } from 'msw'

export default {
    title: 'Components/SignIn',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        massage: 'Login realizado!'
                    }))
                })
            ]
        }
    }
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Johndoe@example.com'), 'diegobtistadev@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('********'), '12345')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
        })

        
    }
} 