import { StyledButton, CloseButtonSVG } from "./StyledComponents";
import { useTheme } from "styled-components";

const CloseButton = () => {
  const theme = useTheme();

  return (
    <StyledButton>
      <CloseButtonSVG
        height="24px"
        width="24px"
        viewBox="0 0 24 24"
        fill={theme.primary.text}
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
      </CloseButtonSVG>
    </StyledButton>
  );
};

export default CloseButton;
