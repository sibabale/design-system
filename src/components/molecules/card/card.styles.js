import styled from "styled-components";
import colors from "../../../theme/colors";

export const CardContainer = styled.div`
  border: 2px solid ${colors.base["tertiary-200"]};
  padding: 20px;
  display: inline-block;
  border-radius: ${({ rounded }) => (rounded ? "5px" : 0)};
`;

export const Header = styled.h3`
  margin-bottom: 20px;
`;
