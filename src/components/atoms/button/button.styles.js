import styled from "styled-components";
import sizes from "../../../theme/sizes";
import colors from "../../../theme/colors";

const buttonColor = (variant) => {
  if (variant === "tertiary" || variant === "transparent") {
    return colors.copy.text;
  } else {
    return colors.copy.text_inverted;
  }
};

export const ButtonContainer = styled.button`
  color: ${({ variant }) => variant && buttonColor(variant)};
  border: ${({ variant }) =>
    variant === "tertiary"
      ? `1px solid ${colors.secondary}`
      : variant === "transparent"
      ? "none"
      : `1px solid ${colors.base[variant]}`};
  cursor: pointer;
  display: flex;
  padding: ${({ size }) => size && sizes[size]};
  min-width: ${({ icon, label }) => (icon && !label ? "0" : "120px")};
  align-items: center;
  justify-content: center;
  background-color: ${({ variant }) => variant && colors.base[variant]};
  box-sizing: border-box;
`;

export const IconContiainer = styled.span`
  margin-right: ${({ icon, label }) => (icon && !label ? "0" : "10px")};
`;
