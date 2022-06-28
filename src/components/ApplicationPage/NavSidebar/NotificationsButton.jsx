import { useTheme } from "styled-components";

import { Button, ButtonText } from "./StyledComponents";

const NotificationsButton = () => {
  const theme = useTheme();
  const notificationsSvg = (
    <svg viewBox="0 0 24 24" style={{ height: "1.75rem", display: "flex" }}>
      <path
        fill={theme.primary.text}
        d="M 21.697 16.468 c -0.02 -0.016 -2.14 -1.64 -2.103 -6.03 c 0.02 -2.532 -0.812 -4.782 -2.347 -6.335 C 15.872 2.71 14.01 1.94 12.005 1.93 h -0.013 c -2.004 0.01 -3.866 0.78 -5.242 2.174 c -1.534 1.553 -2.368 3.802 -2.346 6.334 c 0.037 4.33 -2.02 5.967 -2.102 6.03 c -0.26 0.193 -0.366 0.53 -0.265 0.838 c 0.102 0.308 0.39 0.515 0.712 0.515 h 4.92 c 0.102 2.31 1.997 4.16 4.33 4.16 s 4.226 -1.85 4.327 -4.16 h 4.922 c 0.322 0 0.61 -0.206 0.71 -0.514 c 0.103 -0.307 -0.003 -0.645 -0.263 -0.838 Z M 12 20.478 c -1.505 0 -2.73 -1.177 -2.828 -2.658 h 5.656 c -0.1 1.48 -1.323 2.66 -2.828 2.66 Z M 4.38 16.32 c 0.74 -1.132 1.548 -3.028 1.524 -5.896 c -0.018 -2.16 0.644 -3.982 1.913 -5.267 C 8.91 4.05 10.397 3.437 12 3.43 c 1.603 0.008 3.087 0.62 4.18 1.728 c 1.27 1.285 1.933 3.106 1.915 5.267 c -0.024 2.868 0.785 4.765 1.525 5.896 H 4.38 Z"
      ></path>
    </svg>
  );

  return window.location.pathname === "/notifications" ? (
    <Button selected to="/notifications">
      {notificationsSvg}
      <ButtonText>Notifications</ButtonText>
    </Button>
  ) : (
    <Button to="/notifications">
      {notificationsSvg}
      <ButtonText>Notifications</ButtonText>
    </Button>
  );
};

export default NotificationsButton;
