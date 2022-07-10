import { useContext } from "react";
import { LogOutContainer, LogOutButton } from "./StyledComponents";

import { UserNameContext } from "../../../contexts/UserNameContext";

const LogOutSection = ({ setUserSectionClicked }) => {
  const userName = useContext(UserNameContext).userName;

  return (
    <LogOutContainer>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        onClick={() => {
          setUserSectionClicked(false);
        }}
      ></div>
      <LogOutButton to={"/logout"}>Log out @{userName}</LogOutButton>
    </LogOutContainer>
  );
};

export default LogOutSection;
