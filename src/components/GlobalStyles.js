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
    text-decoration: none;
}
p {
    margin: 0;
}
`;
