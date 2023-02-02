import React from "react";

import { Button } from "./button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Atoms/Button/Sizes",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: "string" },
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: [
        "danger",
        "warning",
        "primary",
        "secondary",
        "tertiary",
        "success",
      ],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Click Me",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Click Me",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Click Me",
};
