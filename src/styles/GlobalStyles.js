import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Poppins", sans-serif;
        text-decoration: none;
    }

    body{
        background-color: rgba(5, 6, 8, 1);
        background-image: radial-gradient(#1C1C1C 0.7px, transparent 0.7px);
        background-size: 25px 25px;
    }

    button{
        cursor: pointer;
    }
    
`

export default GlobalStyles;