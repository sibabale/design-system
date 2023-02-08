import styled from "styled-components";
import colors from "../../../theme/colors";

const pillColor = (variant) => {
  if (variant === "tertiary" || variant === "transparent") {
    return colors.copy.text;
  } else {
    return colors.copy.text_inverted;
  }
};
export const PillContianer = styled.span`
  color: ${({ variant }) => variant && pillColor(variant)};
  border: ${({ variant }) =>
    variant === "tertiary" ? `1px solid ${colors.base.secondary}` : "none"};
  display: inline-block;
  padding: 5px 10px;
  font-size: 12;
  border-radius: ${({ rounded }) => (rounded ? "100px" : 0)};
  background-color: ${({ variant }) => variant && colors.base[variant]};
`;
