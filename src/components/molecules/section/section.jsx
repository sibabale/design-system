import React from "react";
import { SectionContianer } from "./section.styles";

export const Section = (props) => {
  return <SectionContianer>{props.children}</SectionContianer>;
};

export default Section;
