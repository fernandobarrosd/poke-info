import React from "react";
import { TitleStyle } from "./style";

interface TitleProps extends React.HTMLAttributes<HTMLTitleElement>{}


export const Title = ({ children } : TitleProps) => {
    return <TitleStyle>{children}</TitleStyle>
}