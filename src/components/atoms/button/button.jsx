import React from "react";
import PropTypes from "prop-types";
import { ButtonContainer } from "./button.styles.js";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant, size, label, icon }) => {
  return (
    <ButtonContainer type="button" icon={icon} size={size} variant={variant}>
      {icon && icon}
      {label}
    </ButtonContainer>
  );
};

Button.propTypes = {
  /**
   * What background color to use
   */
  variant: PropTypes.string.isRequired,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: "small",
  variant: "primary",
  onClick: undefined,
  backgroundColor: null,
};
