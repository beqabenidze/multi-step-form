import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        font-family: 'Ubuntu', sans-serif;
        
    }
    body{
        background-color: ${(props) => props.theme.background};
        width: 100%;
        height: 100vh;
        overflow-y: hidden;
        display: flex;
        justify-content: center;
        @media (min-width: 1000px){
            padding: 100px;
        }
    }
    
    
`;

export default GlobalStyles;
