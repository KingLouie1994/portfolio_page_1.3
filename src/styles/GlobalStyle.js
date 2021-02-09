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
}

p{
    @media (max-width: 1000px) and (orientation: landscape) {
        font-size: 24px;
    }
}
`;

export default GlobalStyle;
