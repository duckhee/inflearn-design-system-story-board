import React from "react";


interface LabelProps {
    htmlFor: string;
    children: string;
}

export const Label: React.FC<LabelProps> = ({htmlFor, children}) => {
    return (
        <label className={`text-sm text-primary`} htmlFor={htmlFor}>{children}</label>
    );
};

export default Label;