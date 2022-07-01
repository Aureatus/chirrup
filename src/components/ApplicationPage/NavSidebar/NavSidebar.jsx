import { Nav } from "./StyledComponents";

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

const NavSidebar = () => {
  return (
    <Nav>
      <div id="top-section">
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
      </div>
    </Nav>
  );
};

export default NavSidebar;
