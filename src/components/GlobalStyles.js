import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background : ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Libre franklin;
    font-size: 15px;
    transition: all 0.50s linear;
}`;
