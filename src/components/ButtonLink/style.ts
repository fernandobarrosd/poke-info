import styled from "styled-components";
import { Link } from "react-router-dom";


export const ButtonLinkStyle = styled(Link)`
    padding: 10px;
    background-color: var(--color-second);
    font-family: "Pokemon Solid";
    border-radius: 4px;
    transition: .2s opacity ease-in;
    text-decoration: none;
    color: black;
    margin-top: 20px;
    &:hover {
        opacity: 0.8;
            
    }
`