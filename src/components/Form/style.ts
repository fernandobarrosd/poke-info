import styled from "styled-components";


export const Container = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    fieldset {
        border: 0;
        width: 95%;
        input {
            width: 100%;
            margin-bottom: 20px;
        }

    }

    button {
        width: 95%;
    }
`