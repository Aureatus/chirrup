import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    height: 100%;
    width: 100%;
    margin: 0%;
    background : ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Libre franklin;
    font-size: 15px;
}`;
