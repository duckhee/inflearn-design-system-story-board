import type {Meta, StoryObj} from "@storybook/react";

import CategoryButton from "../components/CategoryButton.tsx";
import {fn} from "@storybook/test";

const meta = {
    title: "Buttons/CategoryButton",
    component: CategoryButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        iconAlt: {
            control: "text",
            description: "이미지의 alt 속성",
            defaultValue: "icon"
        },
        iconPath: {
            control: "text",
            description: "이미지 경로",
            defaultValue: "https://kr.object.ncloudstorage.com/icons/ic-category.svg"
        },
        onClick: {
            action: "clicked",
            description: "버튼 클릭 이벤트"
        },
        text: {
            control: "text",
            description: "버튼에 표시될 텍스트",
            defaultValue: "카테고리"
        }
    },

} satisfies Meta<typeof CategoryButton>;


export default meta;

export type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        iconAlt: "icon alt",
        iconPath: "https://kr.object.ncloudstorage.com/icons/ic-category.svg",
        text: "category",
        onClick: fn()
    },

};
