import type {Meta, StoryObj} from "@storybook/react";
// import {fn} from "@storybook/test";
import Label from "../components/Label.tsx";

const meta = {
    title: "Text/Label",
    component: Label,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        htmlFor: {
            control: "text",
            description: "label 의 for 속성",
        },
        children: {
            control: "text",
            description: "label 의 내용"
        }
    },
    // args: {onClick: fn()},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        htmlFor: "username",
        children: '이메일',
    },
};
