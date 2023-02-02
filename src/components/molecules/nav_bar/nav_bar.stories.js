import React from "react";
import { Button } from "../../atoms/button/button";
import { NavBar as NavBarComponent } from "./nav_bar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/Navigation Bar",
  component: NavBarComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  subcomponents: { Button },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <NavBarComponent {...args} />;

export const NavigationBar = Template.bind({});
NavigationBar.args = {
  links: [
    { text: "Individuals", href: "individuals" },
    { text: "Businesses", href: "businesses" },
    { text: "Clients", href: "clients" },
    { text: "Company", href: "company" },
  ],
  showLogo: true,
  children: (
    <div>
      <Button size="medium" variant="tertiary" label="Login" />
      <Button size="medium" variant="primary" label="Get Started" />
    </div>
  ),
};
