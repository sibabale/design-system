import styled from "styled-components";

import { Link } from "../../../styles/global.styles";

export const NavBarContainer = styled.nav`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Tablets and mobile phones */
  @media screen and (max-width: 768px) {
    padding: 10px 5px;
  }
`;

export const NavLinks = styled.div`
  /* Tablets and mobile phones */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  padding: 0 40px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const MenuIconContainer = styled.div`
  display: none;

  /* Tablets and mobile phones */
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  /* Tablets and mobile phones */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ThemeIconContainer = styled.div`
  margin-right: 40px;
`;
