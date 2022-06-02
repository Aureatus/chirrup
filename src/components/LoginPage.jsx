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

const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px;
  grid-area: 1 / 2 / 2 / 3;
`;

const Footer = styled.footer`
  grid-area: 2 / 1 / 3 / 3;
`;

function LoginPage() {
  return (
    <Container>
      <LeftSection></LeftSection>
      <RightSection></RightSection>
      <Footer></Footer>
    </Container>
  );
}

export default LoginPage;
