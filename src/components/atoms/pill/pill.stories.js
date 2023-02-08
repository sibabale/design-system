import styled from "styled-components";

import { Pill } from "./pill";

export default {
  title: "Design System/Atoms/Pill",
  component: Pill,
  argTypes: {
    text: { control: { type: "text" } },
    rounded: { control: { type: "boolean" } },
    variant: {
      control: {
        type: "select",
        options: [
          "danger",
          "success",
          "warning",
          "primary",
          "tertiary",
          "secondary",
        ],
      },
    },
  },
};

const Template = (args) => <Pill {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Coming soon",
  rounded: true,
};

export const Variants = (args) => (
  <Spacer>
    <Pill {...args} text="Danger" variant="danger" />
    <Pill {...args} text="Success" variant="success" />
    <Pill {...args} text="Warning" variant="warning" />
    <Pill {...args} text="Primary" variant="primary" />
    <Pill {...args} text="Tertiary" variant="tertiary" />
    <Pill {...args} text="Secondary" variant="secondary" />
  </Spacer>
);

const Spacer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
