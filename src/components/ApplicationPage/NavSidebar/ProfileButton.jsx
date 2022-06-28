import { useTheme } from "styled-components";

import { Button, ButtonText } from "./StyledComponents";

const ProfileButton = () => {
  const theme = useTheme();
  const profileSvg = (
    <svg viewBox="0 0 24 24" style={{ height: "1.75rem", display: "flex" }}>
      <path
        fill={theme.primary.text}
        d="M 12 11.816 c 1.355 0 2.872 -0.15 3.84 -1.256 c 0.814 -0.93 1.078 -2.368 0.806 -4.392 c -0.38 -2.825 -2.117 -4.512 -4.646 -4.512 S 7.734 3.343 7.354 6.17 c -0.272 2.022 -0.008 3.46 0.806 4.39 c 0.968 1.107 2.485 1.256 3.84 1.256 Z M 8.84 6.368 c 0.162 -1.2 0.787 -3.212 3.16 -3.212 s 2.998 2.013 3.16 3.212 c 0.207 1.55 0.057 2.627 -0.45 3.205 c -0.455 0.52 -1.266 0.743 -2.71 0.743 s -2.255 -0.223 -2.71 -0.743 c -0.507 -0.578 -0.657 -1.656 -0.45 -3.205 Z m 11.44 12.868 c -0.877 -3.526 -4.282 -5.99 -8.28 -5.99 s -7.403 2.464 -8.28 5.99 c -0.172 0.692 -0.028 1.4 0.395 1.94 c 0.408 0.52 1.04 0.82 1.733 0.82 h 12.304 c 0.693 0 1.325 -0.3 1.733 -0.82 c 0.424 -0.54 0.567 -1.247 0.394 -1.94 Z m -1.576 1.016 c -0.126 0.16 -0.316 0.246 -0.552 0.246 H 5.848 c -0.235 0 -0.426 -0.085 -0.552 -0.246 c -0.137 -0.174 -0.18 -0.412 -0.12 -0.654 c 0.71 -2.855 3.517 -4.85 6.824 -4.85 s 6.114 1.994 6.824 4.85 c 0.06 0.242 0.017 0.48 -0.12 0.654 Z"
      ></path>
    </svg>
  );

  return window.location.pathname === "/profile" ? (
    <Button selected to="/profile">
      {profileSvg}
      <ButtonText>Profile</ButtonText>
    </Button>
  ) : (
    <Button to="/profile">
      {profileSvg}
      <ButtonText>Profile</ButtonText>
    </Button>
  );
};

export default ProfileButton;
