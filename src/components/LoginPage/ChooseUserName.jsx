import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Background,
  Container,
  Header2,
  ErrorContainer,
  UserNameInput,
  SetNameButton,
} from "./StyledComponents";

import { getCurrentUser } from "../../firebaseFunctions/firebaseAuth";
import { createUserName } from "../../firebaseFunctions/firebaseStore";

const ChooseUserName = ({ setUser, setUserName }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [inputUserName, setinputUserName] = useState("");

  const navigate = useNavigate();

  return (
    <Background>
      <Container>
        <Header2>Please enter a user name.</Header2>
        <UserNameInput
          type="text"
          placeholder="Username"
          required
          onChange={(e) => {
            if (e.target.validity) {
              setinputUserName(e.target.value);
            }
          }}
        />
        <ErrorContainer>{errorMessage}</ErrorContainer>
        <SetNameButton
          onClick={async () => {
            if (!inputUserName) {
              setErrorMessage("User name is required.");
              return;
            } else {
              const user = getCurrentUser();
              try {
                if (user.providerData[0].providerId === "password") {
                  await createUserName(user.uid, inputUserName);
                  setUser(user);
                  setUserName(inputUserName);
                  navigate("/");
                } else if (user.providerData[0].providerId === "google.com") {
                  await createUserName(user.uid, inputUserName);
                  setUser(user);
                  setUserName(inputUserName);
                  navigate("/");
                }
              } catch (error) {
                setErrorMessage(error.message);
              }
            }
          }}
        >
          Set name
        </SetNameButton>
      </Container>
    </Background>
  );
};

export default ChooseUserName;
