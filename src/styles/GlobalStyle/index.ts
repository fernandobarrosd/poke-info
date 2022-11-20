import { createGlobalStyle } from "styled-components";
import pokemonSolid from "../../assets/fonts/pokemon-solid.ttf";
import pokemonHollow from "../../assets/fonts/pokemon-hollow.ttf";

export const GlobalStyle = createGlobalStyle`


    :root {
        --color-primary: #E6AC5A;
        --color-second: #de5239;
        
    }

    @font-face {
        font-family: "Pokemon Hollow";
        src: url(${pokemonHollow});
    }

    @font-face {
        font-family: "Pokemon Solid";
        src: url(${pokemonSolid});
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, #root {
        font-family: "Pokemon Hollow";
        background-color: var(--color-primary);
        
    }

    input, button {
        border: 0;
    }

    button {
        cursor: pointer;
    }

    

`