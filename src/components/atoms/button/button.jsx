import React from "react";
import PropTypes from "prop-types";
import { IconContainer } from "../../../styles/global.styles";
import { ButtonContainer } from "./button.styles.js";

/**
 * Primary UI component for user interaction
 */
const Button = ({ size, icon, label, rounded, variant }) => {
  return (
    <ButtonContainer
      type="button"
      icon={icon}
      size={size}
      rounded={rounded}
      variant={variant}
    >
      {icon && (
        <IconContainer
          className="material-symbols-sharp"
          icon={icon}
          label={label}
        >
          {icon}
        </IconContainer>
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
   * Round the corners of the button
   */
  rounded: PropTypes.bool,
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
  rounded: false,
  variant: "primary",
  onClick: undefined,
};

export default Button;
