import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    height: 100%;
    width: 100%;
    margin: 0%;
    background : ${({ theme }) => theme.primary.background};
    color: ${({ theme }) => theme.primary.text};
    font-family: Libre franklin;
    font-size: 15px;
}
* {
    color: inherit;
}
a:-webkit-any-link {
    color: black;
    text-decoration: none;
    color: inherit;
}
p {
    margin: 0;
}
`;
