import React from "react";

interface TagButtonProps {
    children: string;
    isChecked: boolean;
    onClick: () => void;
}

export const TagButton: React.FC<TagButtonProps> = ({children, isChecked, onClick}) => {
    const buttonStyle = isChecked ? "bg-white text-primary" : "text-white bg-darkOpacity";
    return (
        <button
            className={`rounded-tag-button px-[10px] border border-white h-[33px] ${buttonStyle} text-sm font-medium`}
            onClick={onClick}>{children}</button>
    );
};

export default TagButton;