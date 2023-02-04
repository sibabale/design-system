import React from "react";
import styled from "styled-components";

import { Button } from "../../atoms/button/button";
import { NavBar } from "./nav_bar";

export default {
  title: "Design System/Molecules/Navigation Bar",
  component: NavBar,
  parameters: {
    componentSubtitle: "Main navigation component for an application",
  },
  subcomponents: { Button },
};

export const NavigationBar = (args) => (
  <NavBar
    links={[
      { text: "Individuals", href: "individuals" },
      { text: "Businesses", href: "businesses" },
      { text: "Clients", href: "clients" },
      { text: "Company", href: "company" },
    ]}
    showLogo="true"
  >
    <ButtonSpacer>
      <Button size="medium" variant="tertiary" label="Login" />
    </ButtonSpacer>
    <ButtonSpacer>
      <Button size="medium" variant="primary" label="Get Started" />
    </ButtonSpacer>
  </NavBar>
);

const ButtonSpacer = styled.div`
  padding: 0 10px;
`;
