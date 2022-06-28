import { useTheme } from "styled-components";

import { Button, ButtonText } from "./StyledComponents";

const ListsButton = () => {
  const theme = useTheme();
  const listsSvg = (
    <svg viewBox="0 0 24 24" style={{ height: "1.75rem", display: "flex" }}>
      <path
        fill={theme.primary.text}
        d="M 19.75 22 H 4.25 C 3.01 22 2 20.99 2 19.75 V 4.25 C 2 3.01 3.01 2 4.25 2 h 15.5 C 20.99 2 22 3.01 22 4.25 v 15.5 c 0 1.24 -1.01 2.25 -2.25 2.25 Z M 4.25 3.5 c -0.414 0 -0.75 0.337 -0.75 0.75 v 15.5 c 0 0.413 0.336 0.75 0.75 0.75 h 15.5 c 0.414 0 0.75 -0.337 0.75 -0.75 V 4.25 c 0 -0.413 -0.336 -0.75 -0.75 -0.75 H 4.25 Z"
      ></path>
      <path
        fill={theme.primary.text}
        d="M 17 8.64 H 7 c -0.414 0 -0.75 -0.337 -0.75 -0.75 s 0.336 -0.75 0.75 -0.75 h 10 c 0.414 0 0.75 0.335 0.75 0.75 s -0.336 0.75 -0.75 0.75 Z m 0 4.11 H 7 c -0.414 0 -0.75 -0.336 -0.75 -0.75 s 0.336 -0.75 0.75 -0.75 h 10 c 0.414 0 0.75 0.336 0.75 0.75 s -0.336 0.75 -0.75 0.75 Z m -5 4.11 H 7 c -0.414 0 -0.75 -0.335 -0.75 -0.75 s 0.336 -0.75 0.75 -0.75 h 5 c 0.414 0 0.75 0.337 0.75 0.75 s -0.336 0.75 -0.75 0.75 Z"
      ></path>
    </svg>
  );

  return window.location.pathname === "/lists" ? (
    <Button selected to="/lists">
      {listsSvg}
      <ButtonText>Lists</ButtonText>
    </Button>
  ) : (
    <Button to="/lists">
      {listsSvg}
      <ButtonText>Lists</ButtonText>
    </Button>
  );
};

export default ListsButton;
