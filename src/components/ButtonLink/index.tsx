import { ButtonLinkStyle } from "./style";
import { LinkProps } from "react-router-dom";



export const ButtonLink = ({ children, ...props } : LinkProps) => {
    return <ButtonLinkStyle { ...props }>{children}</ButtonLinkStyle>
}