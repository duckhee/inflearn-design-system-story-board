import React from "react";

interface ErrorMessageProps {
    children: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({children}) => {
    return (
        <p className={`text-xs text-error`}>{children}</p>
    );
};

export default ErrorMessage;