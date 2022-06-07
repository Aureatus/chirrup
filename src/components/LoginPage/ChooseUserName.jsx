import { useState } from "react";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

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
  const [userNameInput, setUserNameInput] = useState("");

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
              setUserNameInput(e.target.value);
            }
          }}
        />
        <ErrorContainer>{errorMessage}</ErrorContainer>
        <SetNameButton
          onClick={async () => {
            if (!userNameInput) {
              setErrorMessage("User name is required.");
              return;
            } else {
              const user = getCurrentUser();
              await createUserName(user.uid, userNameInput);
              await setUserName(userNameInput);
              await setUser(user);
              navigate("/");
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
