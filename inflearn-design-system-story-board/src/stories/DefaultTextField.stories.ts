import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import {DefaultTextField} from "../components/DefaultTextField.tsx";


const meta = {
    title: "TextFields/DefaultTextField",
    component: DefaultTextField,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        id: {
            control: "text",
            description: "input id",
        },
        errorMessage: {
            control: "text",
            description: "error message",
            defaultValue: "error msg"
        },
        placeholder: {
            control: "text",
            description: "description input box",
            defaultValue: "description"
        },
        iconAlt: {
            control: "text",
            description: "아이콘 alt 속성",
            defaultValue: "icon ",
        },
        iconPath: {
            control: "text",
            description: "아이콘의 이미지 경로",
        },
        onIconClick: {
            action: "clicked",
            description: "icon click function",
        },
        value: {
            control: "text",
            description: "텍스 필드의 값",
            defaultValue: ""
        },
        onChange: {
            action: "changed",
            description: "텍스트 필드 값 변경 이벤트"
        },
        isError: {
            control: "boolean",
            description: "에러 상태 여부",
            defaultValue: false
        },
    }
} satisfies Meta<typeof DefaultTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: "input",
        iconAlt: "icon",
        iconPath: "https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg",
        placeholder: "텍스트를 입력해주세요",
        value: "",
        errorMessage: "텍스트를 확인해주세요",
        onIconClick: fn(),
        onChange: fn(),
        isError: false,
    }
};

