import styled from "styled-components";

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: #00000060;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template: 95% 5% / 1fr 1fr;
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

export { Background, LoginContainer, Container, LeftSection, RightSection };
