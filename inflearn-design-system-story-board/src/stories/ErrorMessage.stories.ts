import type {Meta, StoryObj} from "@storybook/react";
import ErrorMessage from "../components/ErrorMessage.tsx";

const meta = {
    title: "Text/ErrorMessage",
    component: ErrorMessage,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: "text",
            description: "에러 메세지 정보"
        }
    },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: '에러 메세지 정보',
    },
};