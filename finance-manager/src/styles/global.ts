import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing:  border-box;
        font-family: Roboto;
    }
    body{
        //background-color: #FBF7F4;
        background-color: #f4e1d3;
        height: 100%;
    }
    a{
        text-decoration: none;
        color: #000;
    }
`