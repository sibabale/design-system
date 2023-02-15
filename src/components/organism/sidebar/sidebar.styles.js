import styled from "styled-components";
import { Link } from "../../../styles/global.styles";

export const SidebarContianer = styled.aside`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(29, 241, 153, 17%);
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  padding: 10px;
  align-self: center;
`;

export const Icon = styled.span`
  margin-right: 20px;
`;

export const LinkItem = styled(Link)`
  margin: 20px 0;
  display: flex;
  padding: 0 10px;
  align-items: center;
  border-right: ${({ active }) =>
    active ? " 2px solid black" : "2px solid transparent"};
`;

export const LinkItems = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
