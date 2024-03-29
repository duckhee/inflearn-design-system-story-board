import DefaultTextField from "./DefaultTextField.tsx";
import Label from "./Label.tsx";
import React, {useState} from "react";
import PrimaryButton from "./PrimaryButton.tsx";

export const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    return (
        <div>
            <Label htmlFor={`email`}>Email</Label>
            <DefaultTextField
                id={`email`}
                errorMessage={`이메일을 확인해 주세요`}
                iconPath={`https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg`}
                iconAlt={`deleted`}
                onIconClick={() => setEmail("")}
                placeholder={`이메일을 입력하세요`}
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                isError={false}
            />
            <Label htmlFor={`password`}>비밀번호</Label>
            <DefaultTextField
                id={`password`}
                errorMessage={`비밀번호을 확인해 주세요`}
                iconPath={`https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg`}
                iconAlt={`deleted`}
                onIconClick={() => setPassword("")}
                placeholder={`비밀번호을 입력하세요`}
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                isError={false}
            />
            <PrimaryButton theme={`dark`} onClick={() => {
            }} isDisabled={!email || !password}>로그인</PrimaryButton>
        </div>
    );
};

export default LoginForm;