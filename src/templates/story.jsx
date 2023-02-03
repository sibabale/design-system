import React from "react";
import styled from "styled-components";
import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import { Button } from "../components/atoms/button/button";

export default {
  title: "title",
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

const Template = (args) => <Button {...args} />;

export const Variants = (args) => (
  <Container>
    {/* Add your variants */}
    <Button {...args} variant="primary" label="primary" />
  </Container>
);

export const WithInteractions = Template.bind({});
WithInteractions.args = {
  label: "Click Me",
  variant: "secondary",
};

WithInteractions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
  expect(canvas.getByRole("button")).toHaveAttribute("type", "button");
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
