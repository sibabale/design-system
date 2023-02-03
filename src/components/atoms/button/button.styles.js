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
  padding: ${({ size }) => size && sizes[size]};
  min-width: 120px;
  background-color: ${({ variant }) => variant && colors[variant]};
  box-sizing: border-box;
`;
