import styled from "styled-components";


export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    span {
        font-size: 30px;
        font-weight: bold;
        font-family: "Pokemon Solid";
        color: var(--color-second);
        -webkit-text-stroke: 1px black;
    }

    button {
        margin-top: 20px;
    }
    
`