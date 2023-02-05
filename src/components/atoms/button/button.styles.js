import styled from "styled-components";
import sizes from "../../../theme/sizes.json";
import colors from "../../../theme/colors.json";

const buttonColor = (variant) => {
  if (variant === "tertiary") {
    return colors.text;
  } else {
    return colors.text_inverted;
  }
};

export const ButtonContainer = styled.button`
  color: ${({ variant }) => variant && buttonColor(variant)};
  border: ${({ variant }) =>
    variant === "tertiary"
      ? `1px solid ${colors.secondary}`
      : `1px solid ${colors[variant]}`};
  display: flex;
  padding: ${({ size }) => size && sizes[size]};
  min-width: ${({ icon, label }) => (icon && !label ? "0" : "120px")};
  align-items: center;
  justify-content: center;
  background-color: ${({ variant }) => variant && colors[variant]};
  box-sizing: border-box;
`;

export const IconContiainer = styled.span`
  margin-right: ${({ icon, label }) => (icon && !label ? "0" : "10px")};
`;
