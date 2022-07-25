import {
  TweetPopupContainer,
  ContentContainer,
  UserProfile,
  MainSection,
  TweetTextArea,
} from "./StyledComponents";

import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";

import CloseButton from "./CloseButton";
import TweetFooter from "./TweetFooter";

const TweetPopup = () => {
  const user = useContext(UserContext).user;

  const getProfilePicture = (user) => {
    const profilePicture = user.photoURL;
    if (profilePicture) return profilePicture;
  };

  const [tweetText, setTweetText] = useState("");

  return (
    <TweetPopupContainer>
      <ContentContainer>
        <CloseButton />
        <UserProfile src={getProfilePicture(user)} />
        <div
          style={{
            gridArea: "2 / 2 / 3 / 3",
            display: "flex",
            flexDirection: "column",
            rowGap: "6%",
          }}
        >
          <MainSection>
            <label
              htmlFor="tweet-text-area"
              style={{ height: "100%", width: "100%" }}
            >
              <TweetTextArea
                id="tweet-text-area"
                placeholder="What's happening?"
                required
                col="1"
                onChange={(e) => {
                  if (e.target.validity.valid) {
                    setTweetText(e.target.value);
                  }
                  if (!e.target.validity.valid) {
                    setTweetText("");
                  }
                }}
              />
            </label>
          </MainSection>
          <TweetFooter tweetText={tweetText} />
        </div>
      </ContentContainer>
    </TweetPopupContainer>
  );
};

export default TweetPopup;
