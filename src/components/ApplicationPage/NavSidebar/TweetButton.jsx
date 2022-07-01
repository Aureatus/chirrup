import styled from "styled-components";

import { Button } from "./StyledComponents";

const CustomButton = styled(Button)`
  background-color: ${(props) => props.theme.tweet.background};
  color: ${(props) => props.theme.tweet.text};
  font-size: 17px;
  font-weight: 700;
  border-radius: 9999px;
  margin: 16px 0px;
  padding: 0px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  min-width: 175px;
`;

const TweetButton = () => {
  return <CustomButton to="/compose/tweet">Tweet</CustomButton>;
};

export default TweetButton;
