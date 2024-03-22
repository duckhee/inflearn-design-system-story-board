import IconButton from "./IconButton.tsx";
import ErrorMessage from "./ErrorMessage.tsx";
import React, {useState} from "react";

/** `https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg` */
interface DefaultTextFieldProps {
    errorMessage: string;
    iconPath: string;
    iconAlt: string;
    onIconClick: React.MouseEventHandler<HTMLButtonElement>;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
    isError: boolean;
}


export const DefaultTextField: React.FC<DefaultTextFieldProps> = ({
                                                                      errorMessage,
                                                                      iconPath,
                                                                      iconAlt,
                                                                      onIconClick,
                                                                      placeholder,
                                                                      onChange,
                                                                      value,
                                                                      isError
                                                                  }) => {
    const [isFocused, setIsFocused] = useState(false);
    const borderColor = isFocused ? `border-secondary` : !value ? `border-mono300` : `border-primary`;
    return (
        <div>
            <div
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`
        text-primary 
        border-b 
        border-primary
        ${borderColor}
        `}>
                <input className={`outline-none`} type={`text`} placeholder={placeholder} value={value}
                       onChange={onChange}/>
                {!!value && <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath}/>}
            </div>
            {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
    );
};

export default DefaultTextField;