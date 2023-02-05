import React from "react";
import styled from "styled-components";

import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import { Button } from "./button";

export default {
  title: "Design System/Atoms/Button",
  component: Button,

  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
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
  parameters: {
    componentSubtitle:
      "A clickable element used for interacting with applications",
  },
};

// ICONS ...............................................................
export const Icons = (args) => (
  <Spacer>
    <Button {...args} icon="delete" variant="danger" label="Delete" />
    <Button {...args} icon="download" />
  </Spacer>
);

Icons.parameters = {
  docs: {
    storyDescription: "Material design icons",
  },
};

// END SIZES ----------------------------------------------------------

// SIZES ...............................................................
export const Sizes = (args) => (
  <Spacer>
    <Button {...args} size="small" label="Small" />
    <Button {...args} size="medium" label="Medium" />
    <Button {...args} size="large" label="Large" />
  </Spacer>
);

Sizes.parameters = {
  docs: {
    storyDescription: "3 sizes are supported.",
  },
};

// END SIZES ----------------------------------------------------------

// VARIANTS ...........................................................

export const Variants = (args) => (
  <Spacer>
    <Button {...args} variant="primary" label="Primary" />
    <Button {...args} variant="secondary" label="Secondary" />
    <Button {...args} variant="tertiary" label="Tertiary" />
    <Button {...args} variant="danger" label="Danger" />
    <Button {...args} variant="warning" label="Warning" />
    <Button {...args} variant="success" label="Success" />
  </Spacer>
);

Variants.parameters = {
  docs: {
    storyDescription: "7 variants are supported.",
  },
};
// END VARIANTS --------------------------------------------------------

const Spacer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
