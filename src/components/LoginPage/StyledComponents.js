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

const StyledBackgroundImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const SmallTwitterLogoContainer = styled.div`
  width: 6%;
`;

const Header1 = styled.h1`
  font-size: 64px;
  font-weight: 800;
`;

const Header2 = styled.h2`
  font-size: 31px;
  font-weight: 700;
`;

const StyledSvg = styled.svg`
  position: absolute;
  height: 40%;
  width: 50%;
  left: 0%;
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
};
