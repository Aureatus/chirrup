import { useTheme } from "styled-components";
import styled from "styled-components";

import { Button, ButtonText } from "./StyledComponents";

const CustomButton = styled(Button)`
  margin-top: 2px;
`;

const HomeButton = () => {
  const theme = useTheme();
  const homeSvg = (
    <svg viewBox="0 0 24 24" style={{ height: "1.75rem", display: "flex" }}>
      <path
        fill={theme.primary.text}
        d="M 22.46 7.57 L 12.357 2.115 c -0.223 -0.12 -0.49 -0.12 -0.713 0 L 1.543 7.57 c -0.364 0.197 -0.5 0.652 -0.303 1.017 c 0.135 0.25 0.394 0.393 0.66 0.393 c 0.12 0 0.243 -0.03 0.356 -0.09 l 0.815 -0.44 L 4.7 19.963 c 0.214 1.215 1.308 2.062 2.658 2.062 h 9.282 c 1.352 0 2.445 -0.848 2.663 -2.087 l 1.626 -11.49 l 0.818 0.442 c 0.364 0.193 0.82 0.06 1.017 -0.304 c 0.196 -0.363 0.06 -0.818 -0.304 -1.016 Z m -4.638 12.133 c -0.107 0.606 -0.703 0.822 -1.18 0.822 H 7.36 c -0.48 0 -1.075 -0.216 -1.178 -0.798 L 4.48 7.69 L 12 3.628 l 7.522 4.06 l -1.7 12.015 Z"
      ></path>
      <path
        fill={theme.primary.text}
        d="M 8.22 12.184 c 0 2.084 1.695 3.78 3.78 3.78 s 3.78 -1.696 3.78 -3.78 s -1.695 -3.78 -3.78 -3.78 s -3.78 1.696 -3.78 3.78 Z m 6.06 0 c 0 1.258 -1.022 2.28 -2.28 2.28 s -2.28 -1.022 -2.28 -2.28 s 1.022 -2.28 2.28 -2.28 s 2.28 1.022 2.28 2.28 Z"
      ></path>
    </svg>
  );

  return window.location.pathname === "/home" ? (
    <CustomButton selected to="/home">
      {homeSvg}
      <ButtonText>Home</ButtonText>
    </CustomButton>
  ) : (
    <CustomButton to="/home">
      {homeSvg}
      <ButtonText>Home</ButtonText>
    </CustomButton>
  );
};

export default HomeButton;
