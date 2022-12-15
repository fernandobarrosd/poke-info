import styled from "styled-components";


export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    padding-left: 8px;
    padding-right: 8px;

    h1 {
        text-align: center;
        margin-bottom: 50px;
    }

`


export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    

    button {
        width: 95%;
        padding: 10px;
        background-color: var(--color-second);
        font-family: "Pokemon Solid";
        border-radius: 4px;
        transition: .2s opacity ease-in;

        &:hover {
            opacity: 0.8;
            
        }
    }
`

export const Fields = styled.fieldset`
    border: 0;
        width: 95%;
        input {
            width: 100%;
            margin-bottom: 20px;
        }
`