import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import {
  Background,
  Container,
  Header2,
  ErrorContainer,
  UserNameInput,
  SetNameButton,
} from "./StyledComponents";

import { createUserName } from "../../firebaseFunctions/firebaseStore";
import { auth } from "../../firebaseFunctions/firebaseAuth";

import { UserNameContext } from "../../contexts/UserNameContext";

const ChooseUserName = () => {
  const { setUserName } = useContext(UserNameContext);

  const [errorMessage, setErrorMessage] = useState("");
  const [inputUserName, setinputUserName] = useState("");

  const navigate = useNavigate();

  const setName = async () => {
    if (!inputUserName) {
      setErrorMessage("User name is required.");
      return;
    } else {
      const user = auth.currentUser;
      try {
        if (user.providerData[0].providerId === "password") {
          await createUserName(user.uid, inputUserName);
          setUserName(inputUserName);
          navigate("/");
        } else if (user.providerData[0].providerId === "google.com") {
          await createUserName(user.uid, inputUserName);
          setUserName(inputUserName);
          navigate("/");
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

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
        <SetNameButton onClick={() => setName()}>Set name</SetNameButton>
      </Container>
    </Background>
  );
};

export default ChooseUserName;
