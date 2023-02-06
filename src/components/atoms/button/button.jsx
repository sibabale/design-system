import React from "react";
import PropTypes from "prop-types";
import { IconContiainer, ButtonContainer } from "./button.styles.js";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant, size, label, icon }) => {
  return (
    <ButtonContainer type="button" icon={icon} size={size} variant={variant}>
      {icon && (
        <IconContiainer
          className="material-symbols-sharp"
          icon={icon}
          label={label}
        >
          {icon}
        </IconContiainer>
      )}
      {label}
    </ButtonContainer>
  );
};

Button.propTypes = {
  /**
   * Icon name from Material Design
   */
  icon: PropTypes.string,
  /**
   * What scale should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * What variant color to use?
   */
  variant: PropTypes.oneOf([
    "danger",
    "success",
    "warning",
    "primary",
    "tertiary",
    "secondary",
    "transparent",
  ]).isRequired,
};

Button.defaultProps = {
  size: "medium",
  label: "",
  variant: "primary",
  onClick: undefined,
};
