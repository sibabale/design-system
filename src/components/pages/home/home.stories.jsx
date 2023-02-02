import React from "react";
import styled from "styled-components";

import { Home as HomePage } from "./home";
import colors from "../../../theme/colors.json";
import NavBar from "../../molecules/nav_bar/nav_bar";
import { Button } from "../../atoms/button/button";
import LightThemePhoneImage from "../../../assets/images/light_theme_phone.png";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Pages/Home",
  component: HomePage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  subcomponents: { NavBar, Button },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = (args) => <NavBarComponent {...args} />;

// export const NavigationBar = Template.bind({});
// NavigationBar.args = {
//   links: [
//     { text: "Individuals", href: "individuals" },
//     { text: "Businesses", href: "businesses" },
//     { text: "Clients", href: "clients" },
//     { text: "Company", href: "company" },
//   ],
//   showLogo: true,
//   children: (
//     <div>
//       <Button size="medium" variant="tertiary" label="Login" />
//       <Button size="medium" variant="primary" label="Get Started" />
//     </div>
//   ),
// };

export const Home = (args) => (
  <>
    <NavBar
      showLogo={true}
      links={[
        { text: "Individuals", href: "individuals" },
        { text: "Businesses", href: "businesses" },
        { text: "Clients", href: "clients" },
        { text: "Company", href: "company" },
      ]}
    >
      <ButtonContainer>
        <Button size="medium" variant="tertiary" label="Login" />
      </ButtonContainer>
      <ButtonContainer>
        <Button size="medium" variant="primary" label="Get Started" />
      </ButtonContainer>
    </NavBar>

    <MainSection>
      <div>
        <LeadCopy>
          <HighlightedText>Accept Payments, </HighlightedText>
          <br />
          issue refunds & make payouts, easily and fast.
        </LeadCopy>
        <SecondaryCopy>
          Connecting large and small businesses with over{" "}
          <HighlightedText>47 million customers</HighlightedText>
        </SecondaryCopy>
        <Button size="medium" label="Get Started" />
      </div>

      <div>
        <img src={LightThemePhoneImage} alt="" />
      </div>
    </MainSection>
  </>
);

const LeadCopy = styled.h1`
  padding-bottom: 50px;
`;

const SecondaryCopy = styled.p`
  padding-bottom: 50px;
`;

const ButtonContainer = styled.div`
  padding: 0 10px;
`;

const HighlightedText = styled.span`
  color: ${colors.primary};
`;

const MainSection = styled.section`
  padding: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
