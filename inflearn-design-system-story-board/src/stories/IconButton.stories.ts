import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import IconButton from "../components/IconButton.tsx";
// assets 에 있을 경우 react code 로 가져와야한다.
import reactIcon from "../assets/react.svg";

const meta = {
    title: "Buttons/IconButton",
    component: IconButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        alt: {
            control: "text",
            description: "이미지에 대한 설명",
            defaultValue: "icon",
        },
        iconPath: {
            control: "text",
            description: "이미지에 대한 경로",
            defaultValue: "",
        },
        onClick: {
            action: "clicked",
            description: "클릭시 동작 하는 긴으"
        }
    },
    args: {
        onClick: fn(),
    }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        alt: "icon image",
        // iconPath: "https://via.placeholder.com/24",
        // iconPath: "/vite.svg", /** public 에 있는 이미지일 경우 이와 같이 사용 가능 */
        iconPath: reactIcon, /** asserts 에 있는 이밎 파일은 다음과 같이 사용해야 한다. */
    }
};