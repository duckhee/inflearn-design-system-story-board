import './App.css'
import Label from "./components/Label.tsx";
import DefaultTextField from "./components/DefaultTextField.tsx";
import {useState} from "react";

function App() {
    const [isError, setIsError] = useState(false);
    const errorHandler = () => setIsError((prevState) => !prevState);

    return (
        <>
            <Label htmlFor={`email`}>Email</Label>
            <DefaultTextField id={`email`} placeholder={`이메일을 입력학세요.`} errorMessage={`email을 확읺해주세요.`} value={""}
                              isError={isError}
                              iconPath={`https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg`}
                              iconAlt={`delete`}
                              onIconClick={() => {
                              }}
                              onChange={() => {
                              }}
            />
            <div className={`my-20`}/>
            <Label htmlFor={`address`}>Address</Label>
            <DefaultTextField id={`address`} placeholder={`주소를 입력학세요.`} errorMessage={`address을 확읺해주세요.`} value={""}
                              isError={isError}
                              iconPath={`https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg`}
                              iconAlt={`delete`}
                              onIconClick={() => {
                              }}
                              onChange={() => {
                              }}
            />
            <button type={`button`} onClick={errorHandler}>에러 토글
            </button>
        </>
    )
}

export default App
