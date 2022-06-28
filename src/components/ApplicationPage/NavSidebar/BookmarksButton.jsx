import { useTheme } from "styled-components";

import { Button, ButtonText } from "./StyledComponents";

const BookmarksButton = () => {
  const theme = useTheme();
  const bookmarksSvg = (
    <svg viewBox="0 0 24 24" style={{ height: "1.75rem", display: "flex" }}>
      <path
        fill={theme.primary.text}
        d="M 19.9 23.5 c -0.157 0 -0.312 -0.05 -0.442 -0.144 L 12 17.928 l -7.458 5.43 c -0.228 0.164 -0.53 0.19 -0.782 0.06 c -0.25 -0.127 -0.41 -0.385 -0.41 -0.667 V 5.6 c 0 -1.24 1.01 -2.25 2.25 -2.25 h 12.798 c 1.24 0 2.25 1.01 2.25 2.25 v 17.15 c 0 0.282 -0.158 0.54 -0.41 0.668 c -0.106 0.055 -0.223 0.082 -0.34 0.082 Z M 12 16.25 c 0.155 0 0.31 0.048 0.44 0.144 l 6.71 4.883 V 5.6 c 0 -0.412 -0.337 -0.75 -0.75 -0.75 H 5.6 c -0.413 0 -0.75 0.338 -0.75 0.75 v 15.677 l 6.71 -4.883 c 0.13 -0.096 0.285 -0.144 0.44 -0.144 Z"
      ></path>
    </svg>
  );

  return window.location.pathname === "/bookmarks" ? (
    <Button selected to="/bookmarks">
      {bookmarksSvg}
      <ButtonText>Bookmarks</ButtonText>
    </Button>
  ) : (
    <Button to="/bookmarks">
      {bookmarksSvg}
      <ButtonText>Bookmarks</ButtonText>
    </Button>
  );
};

export default BookmarksButton;
