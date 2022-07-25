import styled from "styled-components";
import hexToRgba from "hex-to-rgba";

const TweetPopupContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: ${(props) => hexToRgba(props.theme.primary.text, 0.4)};
`;

const ContentContainer = styled.div`
  width: 30%;
  height: 25%;

  margin-top: 2%;

  background-color: ${(props) => props.theme.primary.background};

  box-sizing: border-box;
  border-radius: 15px;
  padding: 0.8%;

  display: grid;
  grid-template: 1fr 4fr / 1fr 6fr;
`;

const StyledButton = styled.button`
  height: 36px;
  width: 36px;
  border: none;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.primary.background};
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => hexToRgba(props.theme.primary.text, 0.1)};
  }
`;

const CloseButtonSVG = styled.svg``;

const UserProfile = styled.img`
  border-radius: 50%;
  height: 50px;

  grid-area: 2 / 1 / 3 / 2;
`;

const MainSection = styled.main`
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-bottom: 1px solid #eff3f4;
`;

const TweetTextArea = styled.textarea`
  height: 100%;
  width: 100%;

  background-color: ${(props) => props.theme.primary.background};
  color: ${(props) => props.theme.primary.text};

  overflow: auto;
  border: none;
  padding: 0;
  resize: none;

  font-size: 20px;
  font-family: "Libre Franklin";
  line-height: 24px;

  &:focus {
    outline: none;
  }
`;

const StyledFooter = styled.footer`
  height: 20%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TweetButton = styled.button`
  height: 100%;
  width: 15%;

  font-size: 15px;
  font-weight: 700;
  font-family: "Libre Franklin";

  border: none;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.tweet.background};
  color: ${(props) => props.theme.tweet.text};

  padding: 0;
  cursor: pointer;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

const TweetEmbedButtonSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  align-items: center;

  column-gap: 3%;
`;

const ImageUploadButton = styled.input`
  display: none;
`;

const EmojiButton = styled.button`
  font-size: 15px;
  font-weight: 700;
  font-family: "Libre Franklin";

  border: none;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.tweet.background};
  color: ${(props) => props.theme.tweet.text};

  padding: 0;
`;

export {
  TweetPopupContainer,
  ContentContainer,
  StyledButton,
  CloseButtonSVG,
  UserProfile,
  MainSection,
  TweetTextArea,
  StyledFooter,
  TweetButton,
  TweetEmbedButtonSection,
  ImageUploadButton,
  EmojiButton,
};
