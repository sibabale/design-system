import React from "react";

import { Button } from "./button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Atoms/Button/Variants",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Click Me",
  variant: "primary",
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Click Me",
  variant: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
  label: "Click Me",
  variant: "warning",
};

export const Success = Template.bind({});
Success.args = {
  label: "Click Me",
  variant: "success",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Click Me",
  variant: "tertiary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Click Me",
  variant: "secondary",
};
