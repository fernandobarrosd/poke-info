import { ButtonStyle } from "./style";


interface ButtonProps 
extends React.HTMLAttributes<HTMLButtonElement>{}

export const Button = ({ children, ...props } : ButtonProps) => {
    return <ButtonStyle { ...props }>{children}</ButtonStyle>
}