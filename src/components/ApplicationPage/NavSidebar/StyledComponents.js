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

export { Nav, TwitterLogoContainer, Button, ButtonText, MoreButton };
