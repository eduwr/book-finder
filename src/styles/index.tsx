import { createGlobalStyle } from "styled-components";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Comic Neue';
    }

    #root {
        min-height: 100vh;
        position: relative;
    }

    h1, h2, h3, p {
        color: 'black';
    }

    button {
        padding: 0;
        border: none;
        background: none;
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
`;
