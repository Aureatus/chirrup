import { signOut } from "firebase/auth";
import { auth } from "../../firebaseFunctions/firebaseAuth";
import {
  CancelLogoutButton,
  LoginTextReminder,
  LogoutButton,
  LogoutContainer,
  LogoutHeading,
} from "./StyledComponents";
import { Container } from "./StyledComponents";

import TwitterLogo from "./TwitterLogo";

const LogoutPage = ({ setLogoutClicked }) => {
  const logoutUser = async () => {
    try {
      await signOut(auth);
      setLogoutClicked(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <LogoutContainer>
        <TwitterLogo />
        <LogoutHeading> Log out of Twitter?</LogoutHeading>
        <LoginTextReminder>
          You can always log back in at any time.
        </LoginTextReminder>
        <LogoutButton
          to={"/"}
          onClick={() => {
            logoutUser();
          }}
        >
          Log out
        </LogoutButton>
        <CancelLogoutButton
          to={"/home"}
          onClick={() => {
            setLogoutClicked(false);
          }}
        >
          Cancel
        </CancelLogoutButton>
      </LogoutContainer>
    </Container>
  );
};

export default LogoutPage;
