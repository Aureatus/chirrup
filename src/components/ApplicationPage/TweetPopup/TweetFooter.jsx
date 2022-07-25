import { useTheme } from "styled-components";
import {
  TweetButton,
  StyledFooter,
  TweetEmbedButtonSection,
  ImageUploadButton,
  EmojiButton,
} from "./StyledComponents";

const TweetFooter = ({ tweetText }) => {
  const theme = useTheme();
  return (
    <StyledFooter>
      <TweetEmbedButtonSection>
        <label htmlFor="image-upload" style={{ cursor: "pointer" }}>
          <svg
            height="24px"
            width="24px"
            viewBox="0 0 24 24"
            fill={theme.tweet.background}
          >
            <path d="M 19.75 2 H 4.25 C 3.01 2 2 3.01 2 4.25 v 15.5 C 2 20.99 3.01 22 4.25 22 h 15.5 c 1.24 0 2.25 -1.01 2.25 -2.25 V 4.25 C 22 3.01 20.99 2 19.75 2 Z M 4.25 3.5 h 15.5 c 0.413 0 0.75 0.337 0.75 0.75 v 9.676 l -3.858 -3.858 c -0.14 -0.14 -0.33 -0.22 -0.53 -0.22 h -0.003 c -0.2 0 -0.393 0.08 -0.532 0.224 l -4.317 4.384 l -1.813 -1.806 c -0.14 -0.14 -0.33 -0.22 -0.53 -0.22 c -0.193 -0.03 -0.395 0.08 -0.535 0.227 L 3.5 17.642 V 4.25 c 0 -0.413 0.337 -0.75 0.75 -0.75 Z m -0.744 16.28 l 5.418 -5.534 l 6.282 6.254 H 4.25 c -0.402 0 -0.727 -0.322 -0.744 -0.72 Z m 16.244 0.72 h -2.42 l -5.007 -4.987 l 3.792 -3.85 l 4.385 4.384 v 3.703 c 0 0.413 -0.337 0.75 -0.75 0.75 Z" />
            <circle cx="8.868" cy="8.309" r="1.542"></circle>
          </svg>
          <ImageUploadButton
            type={"file"}
            id="image-upload"
          ></ImageUploadButton>
        </label>
        <label htmlFor="emoji-insert" style={{ cursor: "pointer" }}>
          <svg
            height="24px"
            width="24px"
            viewBox="0 0 24 24"
            fill={theme.tweet.background}
          >
            <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z" />
            <path d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z" />
            <circle cx="9.262" cy="9.458" r="1.478"></circle>
            <circle cx="14.738" cy="9.458" r="1.478"></circle>
          </svg>
          <EmojiButton></EmojiButton>
        </label>
      </TweetEmbedButtonSection>

      {tweetText ? (
        <TweetButton>Tweet</TweetButton>
      ) : (
        <TweetButton disabled>Tweet</TweetButton>
      )}
    </StyledFooter>
  );
};

export default TweetFooter;
