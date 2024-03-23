import IconButton from "./IconButton.tsx";
import React from "react";

interface NavigationBarProps {
    isDark: boolean;
    showBackButton: boolean;
    showCloseButton: boolean;
    showTitle: boolean;
    title?: string;
    onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
    onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const NavigationBar: React.FC<NavigationBarProps> = ({
                                                                isDark,
                                                                showBackButton,
                                                                showCloseButton,
                                                                showTitle,
                                                                title = "",
                                                                onBackButtonClick = () => {
                                                                },
                                                                onCloseButtonClick = () => {
                                                                },
                                                            }) => {
    return (
        <div className={`w-full flex justify-between`}>
            <div className={`navigation-title-wrapper flex`}>
                {/* 뒤로 가기 버튼 */}
                {showBackButton && (<IconButton alt={`뒤로 가기 버튼`}
                                                iconPath={`https://kr.object.ncloudstorage.com/icons/ic-back-arrow${isDark ? "-white" : ""}.svg`}
                                                onClick={onBackButtonClick}/>)}
                {/* 페이지 제목 */}
                {showTitle && (<h1 className={`text-2xl ${isDark ? "text-white" : "text-primary"}`}>{title}</h1>)}
            </div>
            {/* 닫기 버튼 */}
            {showCloseButton && (
                <IconButton alt={`닫기 버튼`}
                            iconPath={`https://kr.object.ncloudstorage.com/icons/ic-close${isDark ? "-white" : ""}.svg`}
                            onClick={onCloseButtonClick}/>)}
        </div>
    );
};

export default NavigationBar;