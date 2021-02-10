import { createGlobalStyle } from "styled-components";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Comic Neue";
    }

    #root {
        min-height: 100vh;
    }

    h1, h2, h3 {
        color: 'black';
    }
    button {
        padding: 0;
        border: none;
        background: none;
        opacity: 0.85;
        transition: opacity 300ms ease;
        transition: transform 100ms linear;
    }
    button:active {
        opacity: 1;
        transform: translate(0, 1px)
    }
    button:hover{
        opacity: 1;
    }
    button:disabled{
        opacity: 1;
    }
    button:focus {
        outline:0;
    }
    input {
        border: none;
        background: none;
        color: 'black';
    }
    input:focus {
        outline: none;
    }
    li {
        text-decoration: dashed;
        margin-left: 32px;
    }
`;
