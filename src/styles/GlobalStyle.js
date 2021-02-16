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
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-text-fill-color: #ed6f22;
        -webkit-box-shadow: 0 0 0 0 #002552 inset;
        transition: background-color 5000s ease-in-out 0s;
        box-shadow: 0 0 0 0 #002552 inset;
    }
    textarea::-webkit-scrollbar {
        width: 0.3rem;
    }
    textarea::-webkit-scrollbar-track {
        background: #002552;
    }
    textarea::-webkit-scrollbar-thumb {
        background: #ed6f22;
    }
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
    @media (max-width: 450px) {
        font-size: 30px
    }
}

h2 {
    font-size: 18px;
    @media (max-width: 1200px) {
        font-size: 16px
    }
    @media (max-width: 450px) {
        font-size: 14px
    }
}

h3 {
    font-size: 20px;
    @media (max-width: 1600px) {
        font-size: 18px;
    }
    @media (max-width: 1200px) {
        font-size: 16px;
    }
}

h4 {
    font-size: 18px;
    @media (max-width: 1600px) {
        font-size: 16px;
    }
    @media (max-width: 1200px) {
        font-size: 12px;
    }
}

h5 {
    font-size: 20px;
    @media (max-width: 1600px) {
        font-size: 18px;
    }
    @media (max-width: 600px) {
        font-size: 14px
    }
}

h6 {
    font-size: 16px;
    @media (max-width: 1600px) {
        font-size: 14px;
    }
    @media (max-width: 600px) {
        font-size: 12px
    }
}
`;

export default GlobalStyle;
