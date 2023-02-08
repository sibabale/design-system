import styled from "styled-components";
import { Link } from "../../../styles/global.styles";

export const SidebarContianer = styled.aside`
  height: 100vh;
  display: flex;
  max-width: 11%;
  flex-direction: column;
  justify-content: space-around;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

export const Icon = styled.span`
  margin-right: 20px;
`;

export const LinkItem = styled(Link)`
  margin: 20px 0;
  display: flex;
  align-items: center;
  border-right: ${({ active }) =>
    active ? " 2px solid black" : "2px solid transparent"};
`;
