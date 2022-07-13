import { useContext } from "react";
import { useTheme } from "styled-components";
import {
  UserSectionButton,
  LeftSection,
  ProfileImg,
  UserNameAndTag,
  UserName,
  UserTag,
  RightSection,
  StyledSvg,
} from "./StyledComponents";

import { UserContext } from "../../../contexts/UserContext";
import { UserNameContext } from "../../../contexts/UserNameContext";

const UserSection = ({ setUserSectionClicked }) => {
  const theme = useTheme();
  const user = useContext(UserContext).user;
  const userName = useContext(UserNameContext).userName;

  const getProfilePicture = (user) => {
    const profilePicture = user.photoURL;
    if (profilePicture) return profilePicture;
  };

  return (
    <UserSectionButton
      onClick={() => {
        setUserSectionClicked(true);
      }}
    >
      <LeftSection>
        <ProfileImg src={getProfilePicture(user)} alt="User Profile" />
        <UserNameAndTag>
          <UserName>{user.displayName}</UserName>
          <UserTag>@{userName}</UserTag>
        </UserNameAndTag>
      </LeftSection>
      <RightSection>
        <StyledSvg viewBox="0 0 24 24" fill={theme.primary.text}>
          <circle cx="5" cy="12" r="2"></circle>
          <circle cx="12" cy="12" r="2"></circle>
          <circle cx="19" cy="12" r="2"></circle>
        </StyledSvg>
      </RightSection>
    </UserSectionButton>
  );
};

export default UserSection;
