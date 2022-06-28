import { useTheme } from "styled-components";

import { Button, ButtonText } from "./StyledComponents";

const MessagesButton = () => {
  const theme = useTheme();
  const messagesSvg = (
    <svg viewBox="0 0 24 24" style={{ height: "1.75rem", display: "flex" }}>
      <path
        fill={theme.primary.text}
        d="M 19.25 3.018 H 4.75 C 3.233 3.018 2 4.252 2 5.77 v 12.495 c 0 1.518 1.233 2.753 2.75 2.753 h 14.5 c 1.517 0 2.75 -1.235 2.75 -2.753 V 5.77 c 0 -1.518 -1.233 -2.752 -2.75 -2.752 Z m -14.5 1.5 h 14.5 c 0.69 0 1.25 0.56 1.25 1.25 v 0.714 l -8.05 5.367 c -0.273 0.18 -0.626 0.182 -0.9 -0.002 L 3.5 6.482 v -0.714 c 0 -0.69 0.56 -1.25 1.25 -1.25 Z m 14.5 14.998 H 4.75 c -0.69 0 -1.25 -0.56 -1.25 -1.25 V 8.24 l 7.24 4.83 c 0.383 0.256 0.822 0.384 1.26 0.384 c 0.44 0 0.877 -0.128 1.26 -0.383 l 7.24 -4.83 v 10.022 c 0 0.69 -0.56 1.25 -1.25 1.25 Z"
      ></path>
    </svg>
  );

  return window.location.pathname === "/messages" ? (
    <Button selected to="/messages">
      {messagesSvg}
      <ButtonText>Messages</ButtonText>
    </Button>
  ) : (
    <Button to="/messages">
      {messagesSvg}
      <ButtonText>Messages</ButtonText>
    </Button>
  );
};

export default MessagesButton;
