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
    id: string;
}


export const DefaultTextField: React.FC<DefaultTextFieldProps> = ({
                                                                      id,
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
        <div className={`relative text-field`}>
            <div
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`
        text-primary 
        border-b 
        border-primary
        ${borderColor}
        `}>
                <input
                    data-testid={id}
                    id={id} className={`outline-none`} type={`text`} placeholder={placeholder} value={value}
                    onChange={onChange}/>
                {!!value && <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath}/>}
            </div>
            {/*CLS 를 줄이는 것이 사용자에게 좋은 경험을 주고 SEO 에 더 좋은 효과가 있다. */}
            {/*react 에서 불필요하게 태그가 있으므로써 더 확인하게 되는 문제가 생긴다. -> Reconciliation 이 발생한다. */}
            {/*{isError && (
                <div className={`absolute`}>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                </div>
            )}*/}
            {isError && (
                <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
        </div>
    );
};

export default DefaultTextField;