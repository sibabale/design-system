import styled from "styled-components";
import { Header as HeaderComponent } from "../../molecules/header/header";
import { Sidebar as SidebarComponent } from "../sidebar/sidebar";

export const LayoutContent = styled.div`
  margin-top: 100px;
`;
export const MainLayoutContianer = styled.div`
  width: 100vw;
  display: flex;
`;

export const Header = styled(HeaderComponent)`
  width: 86vw;
  position: fixed;
`;

export const Sidebar = styled(SidebarComponent)`
  width: 11vw;
  position: fixed;
`;

export const HeaderAndContentContainer = styled.div`
  width: 86vw;
  right: 0;
  display: flex;
  position: absolute;
  padding-left: 20px;
  margin-right: 20px;
  flex-direction: column;
`;
