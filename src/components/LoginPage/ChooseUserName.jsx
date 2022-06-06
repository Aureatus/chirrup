import { useState } from "react";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { getCurrentUser } from "../../firebaseFunctions/firebaseAuth";
import { createUserName } from "../../firebaseFunctions/firebaseStore";

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: #00000060;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 60%;
  width: 30%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  row-gap: 1%;

  border-radius: 15px;
`;

const Header1 = styled.div`
  font-size: 31px;
  font-weight: 700;
`;

const UserNameInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #cfd9de;
  border-radius: 5px;
  width: 50%;
  height: 8%;
  padding: 6% 0px;
  text-align: center;
  font-family: Libre Franklin;
  font-size: 17px;
  margin-top: 5%;

  &:focus-visible {
    outline: none;
    border: 1px solid #1d9bf0;

    &::placeholder {
      color: #1d9bf0;
    }
  }
`;

const ErrorContainer = styled.div`
  height: auto;
  width: 100%;

  color: crimson;

  text-align: center;
`;

const SetNameButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8%;
  width: 50%;
  border: none;
  border-radius: 9999px;
  background-color: #1d9bf0;
  color: white;
  font-family: Libre Franklin;
  font-size: 15px;
  font-weight: 700;
  margin-top: 5%;

  cursor: pointer;
`;

const ChooseUserName = ({ setUser, setUserName }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [userNameInput, setUserNameInput] = useState("");

  const navigate = useNavigate();

  return (
    <Background>
      <Container>
        <Header1>Please enter a user name.</Header1>
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