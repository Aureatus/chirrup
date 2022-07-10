import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: sticky;
  height: 100vh;
  top: 0;
  padding: 0px 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const TopSection = styled.section``;

const BottomSection = styled.section`
  width: 100%;
  margin-bottom: 20px;
`;
const TwitterLogoContainer = styled(Link)`
  display: inline-block;
  cursor: pointer;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(Link)`
  padding: 12px;
  padding-top: 16px;
  cursor: pointer;
  display: flex;
  font-weight: ${(props) => (props.selected ? 700 : 400)};

  border-radius: 999px;

  &:hover {
    background-color: ${(props) => props.theme.secondary.background};
  }
`;

const ButtonText = styled.p`
  font-family: Libre Franklin;
  font-size: 20px;
  margin-right: 16px;
  margin-left: 20px;
`;

const MoreButton = styled.button`
  padding: 12px;
  padding-top: 16px;
  cursor: pointer;
  display: flex;
  background-color: inherit;
  border: none;
`;

const UserSectionButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: inherit;
  border: none;
  width: 100%;
  padding: 10px 15px;

  font-size: 15px;
  font-family: Libre Franklin;

  border-radius: 999px;

  &:hover {
    background-color: ${(props) => props.theme.secondary.background};
  }
`;

const LeftSection = styled.div`
  display: flex;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  height: 40px;
`;

const UserNameAndTag = styled.div`
  margin: 0px 8px;
`;

const UserName = styled.p`
  font-weight: 700;
  text-align: start;
`;

const UserTag = styled.p`
  color: ${(props) => props.theme.secondary.altText};
  text-align: start;
`;

const RightSection = styled.div``;

const StyledSvg = styled.svg`
  height: 1.25rem;
`;

const LogOutContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0px;

  border-radius: 5px;
  box-shadow: ${(props) => props.theme.secondary.altText} 0px -1px 8px -2px;
`;

const LogOutButton = styled(Link)`
  display: flex;
  width: 100%;
  padding-left: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  z-index: 1;
`;

export {
  Nav,
  TwitterLogoContainer,
  Button,
  ButtonText,
  MoreButton,
  UserSectionButton,
  LeftSection,
  ProfileImg,
  UserNameAndTag,
  UserName,
  UserTag,
  RightSection,
  StyledSvg,
  TopSection,
  BottomSection,
  LogOutContainer,
  LogOutButton,
};
