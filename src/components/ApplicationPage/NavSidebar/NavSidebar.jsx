import { Nav, TopSection, BottomSection } from "./StyledComponents";

import TwitterLogo from "./TwitterLogo";
import HomeButton from "./HomeButton";
import ExploreButton from "./ExploreButton";
import NotificationsButton from "./NotificationsButton";
import MessagesButton from "./MessagesButton";
import BookmarksButton from "./BookmarksButton";
import ListsButton from "./ListsButton";
import ProfileButton from "./ProfileButton";
import MoreButton from "./MoreButton";
import TweetButton from "./TweetButton";
import UserSection from "./UserSection";
import LogOutSection from "./LogOutSection";
import { useState } from "react";

const NavSidebar = ({ setLogoutClicked }) => {
  const [userSectionClicked, setUserSectionClicked] = useState(false);

  const bottomSectionChildren = userSectionClicked ? (
    <>
      <LogOutSection
        setUserSectionClicked={setUserSectionClicked}
        setLogoutClicked={setLogoutClicked}
      />
      <UserSection setUserSectionClicked={setUserSectionClicked} />
    </>
  ) : (
    <UserSection setUserSectionClicked={setUserSectionClicked} />
  );

  return (
    <Nav>
      <TopSection>
        <TwitterLogo />
        <HomeButton />
        <ExploreButton />
        <NotificationsButton />
        <MessagesButton />
        <BookmarksButton />
        <ListsButton />
        <ProfileButton />
        <MoreButton />
        <TweetButton />
      </TopSection>
      <BottomSection>{bottomSectionChildren}</BottomSection>
    </Nav>
  );
};

export default NavSidebar;
