// Import to create global valid styles
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    max-width: 100vw;
    background: #8ed3f4;
    color: white;
}

h1 {
    font-size: 60px;
    @media (max-width: 600px) {
        font-size: 40px
    }
    @media (max-width: 400px) {
        font-size: 30px
    }
}

h2 {
    font-size: 18px;
    @media (max-width: 400px) {
        font-size: 14px
    }
}

p{
    @media (max-width: 1000px) and (orientation: landscape) {
        font-size: 24px;
    }
}
`;

export default GlobalStyle;
