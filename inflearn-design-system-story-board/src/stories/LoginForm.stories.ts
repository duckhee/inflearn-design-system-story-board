import type {Meta, StoryObj} from '@storybook/react';

import {userEvent, within, expect} from '@storybook/test';

import LoginForm from "../components/LoginForm.tsx";

const meta: Meta<typeof LoginForm> = {
    title: 'Forms/LoginForm',
    parameters: {
        layout: 'centered'
    },
    component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const emailInput = canvas.getByTestId("email");

        await expect(emailInput).toBeInTheDocument();

        const passwordInput = canvas.getByTestId("password");

        await expect(passwordInput).toBeInTheDocument();

        const loginButton = canvas.getByRole("button", {name: "로그인"});

        await expect(loginButton)
            .toBeDisabled();
    }
};

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm:
    Story = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const emailInput = canvas.getByTestId("email");
        await userEvent.type(emailInput, "test@email.com");

        const passwordInput = canvas.getByTestId("password");

        await userEvent.type(passwordInput, "a-random-password");

        const loginButton = canvas.getByRole("button", {name: "로그인"});

        await expect(loginButton)
            .toBeEnabled();
    }
};