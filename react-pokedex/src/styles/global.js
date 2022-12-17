import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing:  border-box;
        font-family: Roboto;
    }
    
    body{
        font-family: Roboto;

        background-color: #FFFFFF;
        max-width: 62.5rem;
        margin: auto;
    }

    a {
        text-decoration: none;

    }
    
`