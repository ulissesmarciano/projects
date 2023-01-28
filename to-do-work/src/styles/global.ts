import { createGlobalStyle } from "styled-components";
import { GlobalProps } from "./types";


export const GlobalStyles = createGlobalStyle<GlobalProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing:  border-box;
    font-family: Roboto;
  }

  body{
    background-color: ${props => props.theme.body};
  }
`
