import React from "react";
import { Button } from "../Button";
import { Container } from "./style";

interface FormProps extends React.HTMLAttributes<HTMLFormElement>{
    children: React.ReactNode;
    formSubmit?: (e : React.MouseEvent) => void;
    buttonSubmitText?: string;
}

export const Form = ({ children, formSubmit, buttonSubmitText, ...props } : FormProps) => {
    return (
        <Container { ...props }>
            { children }
            <Button onClick={ formSubmit }>{buttonSubmitText}</Button>
        </Container>
    )
}