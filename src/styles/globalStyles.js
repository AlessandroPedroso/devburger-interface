import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`

    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        transition: 0.2s linear;
    } 
    
    button{
        cursor: pointer;
    }

`;

export default globalStyles;
