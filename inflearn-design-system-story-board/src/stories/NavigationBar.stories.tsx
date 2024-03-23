import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import NavigationBar from "../components/NavigationBar.tsx";

const meta = {
    title: "",
    component: NavigationBar,
    parameters: {
        layout: "centered",
    },
    /** 화면상에서 보여주는 것을 꾸며주기 위한 decorator -> decorator 가 있다면, 확장자는 {tsx | jsx} */
    decorators: [
        (Story) => (
            <div style={{width: "360px"}}>
                <Story/>
            </div>
        ),

    ],
    tags: ["autodocs"],
    argTypes: {
        isDark: {
            control: "boolean",
            description: "다크 모드 여부",
            defaultValue: true
        },
        showTitle: {
            control: "boolean",
            description: "페이지 이름 유무",
            defaultValue: true
        },
        showBackButton: {
            control: "boolean",
            description: "뒤로 가기 유무",
            defaultValue: true
        },
        showCloseButton: {
            control: "boolean",
            description: "닫기 버튼 유무",
            defaultValue: true
        },
        title: {
            control: "text",
            description: "타이틀 이름",
            defaultValue: ""
        },
        onBackButtonClick: {
            action: "clicked",
            description: "뒤로 가기 버튼 기능"
        },
        onCloseButtonClick: {
            action: "clicked",
            description: "닫기 가기 버튼 기능"
        }
    },
    args: {}

} satisfies Meta<typeof NavigationBar>;

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {
    args: {
        isDark: false,
        showBackButton: true,
        showCloseButton: true,
        showTitle: true,
        title: "title",
        onBackButtonClick: fn(),
        onCloseButtonClick: fn()
    }
};
