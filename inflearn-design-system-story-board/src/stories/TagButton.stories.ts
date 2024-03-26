import type {Meta, StoryObj} from "@storybook/react";

import TagButton from "../components/TagButton.tsx";
import {fn} from "@storybook/test";

const meta = {
    title: "Buttons/IconButton",
    component: TagButton,
    tags: ["autodocs"],
    parameters: {
        layout: "centered"
    },
    argTypes: {
        children: {
            control: "text",
            description: "버튼의 텍스트",
            defaultValue: "button"
        },
        isChecked: {
            control: "boolean",
            description: "버튼의 활성화 여부",
            defaultValue: true
        },
        onClick: {
            action: "clicked",
            description: "버튼 클릭 이벤트"
        }
    },

}satisfies Meta<typeof TagButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "button",
        isChecked: false,
        onClick: fn()
    }
}