import styled from "styled-components";

const Container = styled.div`
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

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const StyledSvg = styled.svg`
  position: absolute;
  height: 40%;
  width: 50%;
  left: 0%;
`;

const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px;
  grid-area: 1 / 2 / 2 / 3;
`;

const SmallTwitterLogoContainer = styled.div`
  width: 5%;
  padding-bottom: 12px;
`;

const Header1 = styled.h1`
  font-size: 64px;
  font-weight: 800;
  letter-spacing: -1.2px;
  margin: 48px 0px;
`;

const Header2 = styled.h2`
  font-size: 31px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 32px;
`;

const SignUpWithGoogle = styled.button`
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
  font-family: Libre Franklin;
  font-size: 15px;
  font-weight: 700;

  &:hover {
    background-color: #f7f9f9;
  }
`;

const SignUpWithEmail = styled.button`
  display: flex;
  width: max-content;
  align-items: center;
  background-color: #1d9bf0;
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 1.2% 2%;
  cursor: pointer;
  margin-bottom: 8px;
  font-family: Libre Franklin;
  font-size: 15px;
  font-weight: 700;
  color: white;

  &:hover {
    background-color: #1d8dd8;
  }
`;

const SignUpSeparator = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px;
  column-gap: 18px;
`;

const SignUpHr = styled.hr`
  border: none;
  border-top: 1px solid rgb(239, 243, 244);
  width: 14%;
  margin: 0;
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
`;

const SignInSection = styled.section`
  margin-top: 40px;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const SignInButton = styled.button`
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

function LoginPage() {
  return (
    <Container>
      <LeftSection>
        <StyledImg
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
        <SignUpWithGoogle>
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
        <SignUpWithEmail>
          <div>Sign up with a phone number or em...</div>
        </SignUpWithEmail>
        <TermsAndConditions>
          By signing up, you agree to the
          <TermsLink>Terms of Service</TermsLink>
          and
          <TermsLink>Privacy Policy</TermsLink>, including
          <TermsLink>Cookie Use.</TermsLink>
        </TermsAndConditions>
        <SignInSection>
          Already have an account?
          <SignInButton>Sign In</SignInButton>
          <GuestSignInButton>Guest sign in</GuestSignInButton>
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
    </Container>
  );
}

export default LoginPage;
