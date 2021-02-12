// Import to create global valid styles
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background: #ed6f22;
    }
    &::-webkit-scrollbar-track {
        background: #002552;
    }
}

body{
    max-width: 100vw;
    overflow-x: hidden;
    background-color: black;
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: lighter;
}

h1 {
    font-size: 60px;
    font-family: "Allerta Stencil", sans-serif;
    @media (max-width: 1400px) {
        font-size: 50px
    }
    @media (max-width: 1200px) {
        font-size: 45px
    }
    @media (max-width: 600px) {
        font-size: 40px
    }
    @media (max-width: 400px) {
        font-size: 30px
    }
}

h2 {
    font-size: 18px;
    @media (max-width: 1200px) {
        font-size: 16px
    }
    @media (max-width: 400px) {
        font-size: 14px
    }
}
`;

export default GlobalStyle;
