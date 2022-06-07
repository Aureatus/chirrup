import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import {
  Background,
  Container,
  SmallTwitterLogoContainer,
  Header2,
  SignUpWithGoogle,
  SignUpSeparator,
  SignUpHr,
  InputContainer,
} from "./StyledComponents";

import {
  signInWithGoogle,
  signUpWithEmailAndPassword,
  getCurrentUser,
} from "../../firebaseFunctions/firebaseAuth";
import {
  fetchUserName,
  createUserName,
} from "../../firebaseFunctions/firebaseStore";

const EmailInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #cfd9de;
  border-radius: 5px;
  width: 100%;
  padding: 6% 0px;
  text-align: center;
  font-family: Libre Franklin;
  font-size: 17px;

  &:focus-visible {
    outline: none;
    border: 1px solid #1d9bf0;

    &::placeholder {
      color: #1d9bf0;
    }
  }
`;

const PasswordInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #cfd9de;
  border-radius: 5px;
  width: 100%;
  padding: 6% 0px;
  text-align: center;
  font-family: Libre Franklin;
  font-size: 17px;

  &:focus-visible {
    outline: none;
    border: 1px solid #1d9bf0;

    &::placeholder {
      color: #1d9bf0;
    }
  }
`;

const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  width: 100%;
  border: none;
  border-radius: 9999px;
  background-color: black;
  color: white;
  font-family: Libre Franklin;
  font-size: 15px;
  font-weight: 700;

  cursor: pointer;
`;

const ErrorContainer = styled.div`
  height: auto;
  width: 100%;

  color: crimson;

  text-align: center;
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

const SignUpButton = styled.button`
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

const SignUpPage = ({ setUser, setUserName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [nextClicked, setNextClicked] = useState(false);
  const [inputUserName, setInputUsername] = useState("");

  const navigate = useNavigate();

  if (nextClicked) {
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
                setInputUsername(e.target.value);
              }
            }}
          />
          <ErrorContainer>{errorMessage}</ErrorContainer>
          <SignUpButton
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
                    const userName = await fetchUserName(user.uid);
                    setUser(user);
                    setUserName(userName);
                    navigate("/");
                  }
                } catch (error) {
                  await createUserName(user.uid, inputUserName);
                  setUser(user);
                  setUserName(inputUserName);
                  navigate("/");
                }
              }
            }}
          >
            Sign up!
          </SignUpButton>
        </Container>
      </Background>
    );
  }

  return (
    <Background>
      <Container>
        <SmallTwitterLogoContainer>
          <svg viewBox="0 0 24 24">
            <path
              fill="rgb(29, 155, 240)"
              d="M 23.643 4.937 c -0.835 0.37 -1.732 0.62 -2.675 0.733 c 0.962 -0.576 1.7 -1.49 2.048 -2.578 c -0.9 0.534 -1.897 0.922 -2.958 1.13 c -0.85 -0.904 -2.06 -1.47 -3.4 -1.47 c -2.572 0 -4.658 2.086 -4.658 4.66 c 0 0.364 0.042 0.718 0.12 1.06 c -3.873 -0.195 -7.304 -2.05 -9.602 -4.868 c -0.4 0.69 -0.63 1.49 -0.63 2.342 c 0 1.616 0.823 3.043 2.072 3.878 c -0.764 -0.025 -1.482 -0.234 -2.11 -0.583 v 0.06 c 0 2.257 1.605 4.14 3.737 4.568 c -0.392 0.106 -0.803 0.162 -1.227 0.162 c -0.3 0 -0.593 -0.028 -0.877 -0.082 c 0.593 1.85 2.313 3.198 4.352 3.234 c -1.595 1.25 -3.604 1.995 -5.786 1.995 c -0.376 0 -0.747 -0.022 -1.112 -0.065 c 2.062 1.323 4.51 2.093 7.14 2.093 c 8.57 0 13.255 -7.098 13.255 -13.254 c 0 -0.2 -0.005 -0.402 -0.014 -0.602 c 0.91 -0.658 1.7 -1.477 2.323 -2.41 Z"
            ></path>
          </svg>
        </SmallTwitterLogoContainer>
        <Header2>Sign up to Twitter</Header2>
        <SignUpWithGoogle
          onClick={async () => {
            try {
              const user = await signInWithGoogle();
              await fetchUserName(user.uid);
              setErrorMessage("Already signed up");
            } catch (error) {
              setNextClicked(true);
            }
          }}
        >
          <svg viewBox="0 0 24 24" height={24} width={24}>
            <path
              d="M18.977 4.322L16 7.3c-1.023-.838-2.326-1.35-3.768-1.35-2.69 0-4.95 1.73-5.74 4.152l-3.44-2.635c1.656-3.387 5.134-5.705 9.18-5.705 2.605 0 4.93.977 6.745 2.56z"
              fill="#EA4335"
            ></path>
            <path
              d="M6.186 12c0 .66.102 1.293.307 1.89L3.05 16.533C2.38 15.17 2 13.63 2 12s.38-3.173 1.05-4.533l3.443 2.635c-.204.595-.307 1.238-.307 1.898z"
              fill="#FBBC05"
            ></path>
            <path
              d="M18.893 19.688c-1.786 1.667-4.168 2.55-6.66 2.55-4.048 0-7.526-2.317-9.18-5.705l3.44-2.635c.79 2.42 3.05 4.152 5.74 4.152 1.32 0 2.474-.308 3.395-.895l3.265 2.533z"
              fill="#34A853"
            ></path>
            <path
              d="M22 12c0 3.34-1.22 5.948-3.107 7.688l-3.265-2.53c1.07-.67 1.814-1.713 2.093-3.063h-5.488V10.14h9.535c.14.603.233 1.255.233 1.86z"
              fill="#4285F4"
            ></path>
          </svg>
          <div>Sign up with Google</div>
        </SignUpWithGoogle>
        <SignUpSeparator>
          <SignUpHr />
          <span>or</span>
          <SignUpHr />
        </SignUpSeparator>
        <InputContainer>
          <EmailInput
            type="email"
            placeholder="Email address"
            required
            onChange={(e) => {
              if (e.target.validity) {
                setEmail(e.target.value);
              }
            }}
          />
          <PasswordInput
            type="password"
            placeholder="password"
            required
            onChange={(e) => {
              if (e.target.validity) {
                setPassword(e.target.value);
              }
            }}
          />
          <NextButton
            onClick={async () => {
              if (!email || !password) {
                setErrorMessage("Email and password must be filled in.");
                return;
              } else {
                try {
                  await signUpWithEmailAndPassword(email, password);
                  setNextClicked(true);
                  setErrorMessage("");
                } catch (error) {
                  setErrorMessage(error.message);
                }
              }
            }}
          >
            Next
          </NextButton>
        </InputContainer>
        <ErrorContainer>{errorMessage}</ErrorContainer>
      </Container>
    </Background>
  );
};

export default SignUpPage;
