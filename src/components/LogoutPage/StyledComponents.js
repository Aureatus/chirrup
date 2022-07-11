import styled from "styled-components";
import hexToRgba from "hex-to-rgba";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => hexToRgba(props.theme.primary.text, 0.4)};
`;

const LogoutContainer = styled.div`
  height: 39%;
  width: 17%;

  background-color: ${(props) => props.theme.primary.background};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4%;

  border-radius: 20px;

  box-sizing: border-box;
  padding: 1.5%;
`;

const TwitterLogoContainer = styled.div`
  align-self: center;
  display: inline-block;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoutHeading = styled.h1`
  margin: 0;
  font-size: 20px;
`;

const LoginTextReminder = styled.p`
  color: ${(props) => props.theme.secondary.altText};
  line-height: 20px;

  margin-bottom: 5%;
`;

const LogoutButton = styled(Link)`
  color: ${(props) => props.theme.tertiary.text};
  background-color: ${(props) => props.theme.tertiary.background};

  width: 100%;
  height: 15%;

  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
`;

const CancelLogoutButton = styled(Link)`
  width: 100%;
  height: 15%;

  border-radius: 999px;
  border: 1px solid ${(props) => hexToRgba(props.theme.secondary.altText, 0.4)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  Container,
  LogoutContainer,
  TwitterLogoContainer,
  LogoutHeading,
  LoginTextReminder,
  LogoutButton,
  CancelLogoutButton,
};
