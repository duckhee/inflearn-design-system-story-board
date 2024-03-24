import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import PrimaryButton from "../components/PrimaryButton.tsx";

const meta = {
    title: "Buttons/PrimaryButton",
    component: PrimaryButton,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    /** css style 적용을 확인하기 위해서 storybook에 custom layout 적용 */
    decorators: [
        (Story) => (
            <div style={{width: "360px"}}>
                <Story/>
            </div>
        ),
    ],
    argTypes: {
        theme: {
            control: {
                type: "select",
                options: ["dark", "light", "social", "text"],
            },
            description: "버튼의 속성에 대해서 변경",
            defaultValue: "dark"
        },
        children: {
            control: "text",
            description: "butotn text",
        },
        onClick: {
            action: "clicked",
            description: "버튼 클리 이벤트"
        },
        isDisabled: {
            control: "boolean",
            description: "버튼 활성화 비활성화 여부",
            defaultValue: false
        }
    }
} satisfies Meta<typeof PrimaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        theme: "dark",
        onClick: fn(),
        children: "Button",
        isDisabled: false,
    }
};


export const Light: Story = {
    args: {
        theme: "light",
        onClick: fn(),
        children: "Button",
        isDisabled: false,
    }
};

export const Social: Story = {
    args: {
        theme: "social",
        onClick: fn(),
        children: "Button",
        isDisabled: false,
    }
};

export const Text: Story = {
    args: {
        theme: "text",
        onClick: fn(),
        children: "Button",
        isDisabled: false,
    }
};


export const Disabled: Story = {
    args: {
        theme: "dark",
        onClick: fn(),
        children: "Button",
        isDisabled: true,
    }
};