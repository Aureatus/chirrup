import styled from "styled-components";

import {
  LoginContainer,
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
} from "./StyledComponents";

import { signInAsGuest } from "../../firebaseFunctions/firebaseAuth";

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

const StyledButton1 = styled.button`
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

const StyledSpan = styled.span`
  border: none;
  background-color: white;
  color: #536471;
  font-size: 13px;
  padding: 0;
`;

function LoginPage({ setUser }) {
  return (
    <LoginContainer>
      <LeftSection>
        <StyledBackgroundImg
          src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
          alt="Twitter background"
        />
        <StyledSvg viewBox="0 0 24 24">
          <path
            d="M 23.643 4.937 c -0.835 0.37 -1.732 0.62 -2.675 0.733 c 0.962 -0.576 1.7 -1.49 2.048 -2.578 c -0.9 0.534 -1.897 0.922 -2.958 1.13 c -0.85 -0.904 -2.06 -1.47 -3.4 -1.47 c -2.572 0 -4.658 2.086 -4.658 4.66 c 0 0.364 0.042 0.718 0.12 1.06 c -3.873 -0.195 -7.304 -2.05 -9.602 -4.868 c -0.4 0.69 -0.63 1.49 -0.63 2.342 c 0 1.616 0.823 3.043 2.072 3.878 c -0.764 -0.025 -1.482 -0.234 -2.11 -0.583 v 0.06 c 0 2.257 1.605 4.14 3.737 4.568 c -0.392 0.106 -0.803 0.162 -1.227 0.162 c -0.3 0 -0.593 -0.028 -0.877 -0.082 c 0.593 1.85 2.313 3.198 4.352 3.234 c -1.595 1.25 -3.604 1.995 -5.786 1.995 c -0.376 0 -0.747 -0.022 -1.112 -0.065 c 2.062 1.323 4.51 2.093 7.14 2.093 c 8.57 0 13.255 -7.098 13.255 -13.254 c 0 -0.2 -0.005 -0.402 -0.014 -0.602 c 0.91 -0.658 1.7 -1.477 2.323 -2.41 Z"
            fill="white"
          ></path>
        </StyledSvg>
      </LeftSection>
      <RightSection>
        <SmallTwitterLogoContainer>
          <svg viewBox="0 0 24 24">
            <path
              fill="rgb(29, 155, 240)"
              d="M 23.643 4.937 c -0.835 0.37 -1.732 0.62 -2.675 0.733 c 0.962 -0.576 1.7 -1.49 2.048 -2.578 c -0.9 0.534 -1.897 0.922 -2.958 1.13 c -0.85 -0.904 -2.06 -1.47 -3.4 -1.47 c -2.572 0 -4.658 2.086 -4.658 4.66 c 0 0.364 0.042 0.718 0.12 1.06 c -3.873 -0.195 -7.304 -2.05 -9.602 -4.868 c -0.4 0.69 -0.63 1.49 -0.63 2.342 c 0 1.616 0.823 3.043 2.072 3.878 c -0.764 -0.025 -1.482 -0.234 -2.11 -0.583 v 0.06 c 0 2.257 1.605 4.14 3.737 4.568 c -0.392 0.106 -0.803 0.162 -1.227 0.162 c -0.3 0 -0.593 -0.028 -0.877 -0.082 c 0.593 1.85 2.313 3.198 4.352 3.234 c -1.595 1.25 -3.604 1.995 -5.786 1.995 c -0.376 0 -0.747 -0.022 -1.112 -0.065 c 2.062 1.323 4.51 2.093 7.14 2.093 c 8.57 0 13.255 -7.098 13.255 -13.254 c 0 -0.2 -0.005 -0.402 -0.014 -0.602 c 0.91 -0.658 1.7 -1.477 2.323 -2.41 Z"
            ></path>
          </svg>
        </SmallTwitterLogoContainer>
        <Header1>Happening now</Header1>
        <Header2>Join Twitter today.</Header2>
        <SignUpLink to={"/sign-up"}>
          <div>Sign up</div>
        </SignUpLink>
        <TermsAndConditions>
          By signing up, you agree to the
          <TermsLink>Terms of Service</TermsLink>
          and
          <TermsLink>Privacy Policy</TermsLink>, including
          <TermsLink>Cookie Use.</TermsLink>
        </TermsAndConditions>
        <SignInSection>
          Already have an account?
          <SignInLink to={"/sign-in"}>Sign In</SignInLink>
          <GuestSignInButton
            onClick={async () => {
              const user = await signInAsGuest();
              setUser(user);
            }}
          >
            Guest sign in
          </GuestSignInButton>
        </SignInSection>
      </RightSection>
      <Footer>
        <StyledNav>
          <StyledButton1>About</StyledButton1>
          <StyledButton1>Help Center</StyledButton1>
          <StyledButton1>Terms Of Service</StyledButton1>
          <StyledButton1>Privacy Policy</StyledButton1>
          <StyledButton1>Cookie Policy</StyledButton1>
          <StyledButton1>Accessibility</StyledButton1>
          <StyledButton1>Ads Info</StyledButton1>
          <StyledButton1>Blog</StyledButton1>
          <StyledButton1>Status</StyledButton1>
          <StyledButton1>Careers</StyledButton1>
          <StyledButton1>Brand Resources</StyledButton1>
          <StyledButton1>Advertising</StyledButton1>
          <StyledButton1>Marketing</StyledButton1>
          <StyledButton1>Twitter for Business</StyledButton1>
          <StyledButton1>Developers</StyledButton1>
          <StyledButton1>Directory</StyledButton1>
          <StyledButton1>Settings</StyledButton1>
          <StyledSpan>© 2022 Twitter, Inc.</StyledSpan>
        </StyledNav>
      </Footer>
    </LoginContainer>
  );
}

export default LoginPage;
