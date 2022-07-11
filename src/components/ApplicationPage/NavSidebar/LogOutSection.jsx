import { useContext } from "react";
import { Button, LogOutContainer } from "./StyledComponents";
import styled from "styled-components";

import { UserNameContext } from "../../../contexts/UserNameContext";

const LogOutButton = styled(Button)`
  display: flex;
  width: 100%;
  border-radius: 5px;
  padding-left: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  z-index: 1;
`;

const LogOutSection = ({ setUserSectionClicked, setLogoutClicked }) => {
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
      <LogOutButton
        to={"/logout"}
        onClick={async () => {
          try {
            setLogoutClicked(true);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        Log out @{userName}
      </LogOutButton>
    </LogOutContainer>
  );
};

export default LogOutSection;
