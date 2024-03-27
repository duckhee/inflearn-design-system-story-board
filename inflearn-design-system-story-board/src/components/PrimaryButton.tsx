import React from "react";

/** 테마에 따라서 버튼의 색상 및 텍스트 색깔을 처리하기 위한 타입 정의 */
type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface PrimaryButtonProps {
    theme: PrimaryButtonTheme;
    isDisabled: boolean;
    children: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

/** dark theme 일 경우 속성 정의 */
const dark = `bg-primary text-white`;
const light = `bg-white text-primary`;
const social = `bg-social text-white`;
const text = `bg-transparent text-white`;
const disabledStyle = "disabled:bg-mono100 disabled:text-mono200";
/**
 * record 타입일 경우 첫번째 인자의 값을 key 로 가지고 두번째 인자를 value 로 가지는 객체를 생성한다.
 * => Map 객체를 생성하는 것과 같다.
 * */
const color: Record<PrimaryButtonTheme, string> = {
    dark,
    light,
    social,
    text
};
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
                                                                theme,
                                                                isDisabled,
                                                                children,
                                                                onClick,
                                                            }) => {
    return (
        <button className={`w-full h-[59px] rounded-button-default ${disabledStyle} ${color[theme]} `}
                disabled={isDisabled}
                onClick={onClick}>{children}</button>
    );
};

export default PrimaryButton;
