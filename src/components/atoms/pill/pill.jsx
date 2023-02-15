import React from "react";
import PropTypes from "prop-types";
import { PillContianer } from "./pill.styles";
import { IconContainer } from "../../../styles/global.styles";

/**
  A pill is a compact label that appears beside a primary interface area which is used to represent status or metadata for that area.
 */
export const Pill = ({ icon, text, rounded, variant }) => (
  <PillContianer rounded={rounded} variant={variant}>
    {icon && (
      <IconContainer className="material-symbols-sharp">{icon}</IconContainer>
    )}
    {text}
  </PillContianer>
);

Pill.propTypes = {
  /**
   * Contents of the pill
   */
  text: PropTypes.string.isRequired,
  /**
   * Round the corners
   */
  rounded: PropTypes.bool,
  /**
   * What background color will the pill have
   */
  variant: PropTypes.oneOf([
    ["danger", "success", "warning", "primary", "tertiary", "secondary"],
  ]),
};

Pill.defaultProps = {
  text: "",
  rounded: false,
  variant: "primary",
};
