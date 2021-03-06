import styled from "styled-components";
import { Link } from "react-router-dom";

// General Components

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

const SmallTwitterLogoContainer = styled.div`
  width: 6%;
`;

const Header2 = styled.h2`
  font-size: 31px;
  font-weight: 700;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 40%;
  row-gap: 10%;
`;

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

const ErrorContainer = styled.label`
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

const StyledSeparator = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 8px;
  column-gap: 2%;
  width: 100%;
`;

const StyledHr = styled.hr`
  border: none;
  border-top: 1px solid rgb(239, 243, 244);
  width: 16%;
  margin: 0;
`;

// LoginPage

const LoginContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template: 95% 5% / 1fr 1fr;
`;

const LeftSection = styled.section`
  display: flex;
  align-items: center;
  grid-area: 1 / 1 / 2 / 2;
`;

const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px;
  grid-area: 1 / 2 / 2 / 3;
`;

const StyledBackgroundImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Header1 = styled.h1`
  font-size: 64px;
  font-weight: 800;
`;

const StyledSvg = styled.svg`
  position: absolute;
  height: 40%;
  width: 50%;
  left: 0%;
`;

const SignUpLink = styled(Link)`
  display: flex;
  width: 34%;
  justify-content: center;
  align-items: center;
  background-color: #1d9bf0;
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 1% 2%;
  cursor: pointer;
  margin-bottom: 8px;
  font-family: Libre Franklin;
  font-size: 20px;
  font-weight: 700;
  color: white;

  &:hover {
    background-color: #1d8dd8;
  }
`;

const TermsAndConditions = styled.div`
  font-size: 11px;
  color: rgb(83, 100, 113);
  margin-bottom: 20px;
  max-width: 290px;
`;

const TermsLink = styled.button`
  font-size: 11px;
  border: none;
  background-color: white;
  color: #1d9bf0;
  padding: 0px 2px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SignInSection = styled.section`
  margin-top: 40px;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const SignInLink = styled(Link)`
  display: flex;
  width: max-content;
  align-items: center;
  background-color: white;
  border: solid 1px rgb(218, 220, 224);
  border-radius: 20px;
  box-sizing: border-box;
  padding: 1.2% 14%;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 8px;
  font-family: Libre Franklin;
  font-size: 15px;
  font-weight: 700;
  color: #1d9bf0;

  &:hover {
    background-color: #83aac460;
  }
`;

const GuestSignInButton = styled.button`
  display: flex;
  width: max-content;
  align-items: center;
  background-color: white;
  border: solid 1px rgb(218, 220, 224);
  border-radius: 20px;
  box-sizing: border-box;
  padding: 1.2% 11.3%;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 8px;
  font-family: Libre Franklin;
  font-size: 15px;
  font-weight: 700;

  &:hover {
    background-color: #83aac460;
  }
`;

const Footer = styled.footer`
  grid-area: 2 / 1 / 3 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNav = styled.nav`
  color: #536471;
  display: flex;
  justify-content: center;
  column-gap: 15px;
`;

const StyledNavButton = styled.button`
  border: none;
  background-color: white;
  color: #536471;
  font-family: Libre Franklin;
  font-size: 13px;
  padding: 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledNavSpan = styled.span`
  border: none;
  background-color: white;
  color: #536471;
  font-size: 13px;
  padding: 0;
`;

// SignUpPage

const SignUpWithGoogleButton = styled.button`
  display: flex;
  width: max-content;
  align-items: center;
  border: solid 1px rgb(218, 220, 224);
  border-radius: 20px;
  background-color: white;
  box-sizing: border-box;
  padding: 0.7% 7%;
  column-gap: 8px;
  cursor: pointer;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 500;
  color: #3c4043;

  &:hover {
    background-color: #f7f9f9;
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

// SignInPage

const SignInWithGoogle = styled.button`
  display: flex;
  width: max-content;
  align-items: center;
  border: solid 1px rgb(218, 220, 224);
  border-radius: 20px;
  background-color: white;
  box-sizing: border-box;
  padding: 0.7% 7%;
  column-gap: 8px;
  cursor: pointer;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 500;
  color: #3c4043;

  &:hover {
    background-color: #f7f9f9;
  }
`;

const LoginButton = styled.button`
  border: none;
  border-radius: 9999px;
  background-color: black;
  color: white;
  font-family: Libre Franklin;
  font-size: 15px;
  font-weight: 700;
  padding: 4% 40%;
  cursor: pointer;
`;

// ChooseUserName

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

export {
  Background,
  LoginContainer,
  Container,
  LeftSection,
  RightSection,
  StyledBackgroundImg,
  SmallTwitterLogoContainer,
  Header1,
  Header2,
  StyledSvg,
  SignUpLink,
  TermsAndConditions,
  TermsLink,
  SignInSection,
  SignInLink,
  GuestSignInButton,
  Footer,
  StyledNav,
  StyledNavButton,
  StyledNavSpan,
  SignUpWithGoogleButton,
  InputContainer,
  EmailInput,
  PasswordInput,
  NextButton,
  ErrorContainer,
  UserNameInput,
  SignUpButton,
  SetNameButton,
  SignInWithGoogle,
  LoginButton,
  StyledSeparator,
  StyledHr,
};
