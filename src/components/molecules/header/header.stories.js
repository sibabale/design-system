import React from "react";

import Header from "./header";

export default {
  title: "Design System/Molecules/Header",
  component: Header,
  parameters: {
    componentSubtitle:
      "The header element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.",
  },
};

export const DashboardHeader = () => <Header />;
