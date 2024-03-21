import React from "react";

interface IconButtonProps {
    alt: string;
    iconPath: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const IconButton: React.FC<IconButtonProps> = ({iconPath, onClick, alt}) => {
    return (
        <button onClick={onClick}><img src={iconPath} alt={alt}/></button>
    );
};

export default IconButton;