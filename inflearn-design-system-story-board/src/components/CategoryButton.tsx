import React from "react";

interface CategoryButtonProps {
    iconPath: string;
    iconAlt: string;
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const CategoryButton: React.FC<CategoryButtonProps> = ({iconAlt, iconPath, onClick, text}) => {
    return (
        <button onClick={onClick} className={`
        rounded-button-default
        border
        border-primary
        text-primary
        text-base 
        font-bold
        pl-[22px]
        pr-[22px]
        py-4
        flex
        flex-col
        items-center 
        justify-center
        `}>
            <img src={iconPath} alt={iconAlt}/>
            <p>{text}</p>
        </button>
    );
};


export default CategoryButton;
