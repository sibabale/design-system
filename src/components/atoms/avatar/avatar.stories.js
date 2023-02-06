import React from "react";
import Avatar from "./avatar";

import Image from "../../../assets/images/avatar.avif";
export default {
  title: "Design System/Atoms/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    image: {
      control: { type: "string" },
    },
  },
  parameteres: {
    componentSubtitle:
      "An image or figure representing a particular person or a business.",
  },
};

export const Size = () => (
  <>
    <Avatar image={Image} size="small" />
    <Avatar image={Image} size="medium" />
    <Avatar image={Image} size="large" />
  </>
);
