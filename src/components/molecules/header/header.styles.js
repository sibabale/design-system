import styled from "styled-components";
import colors from "../../../theme/colors";

export const HeaderContianer = styled.header`
  display: flex;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.base.tertiary};

  /* Mobile Phones */
  @media screen and (max-width: 427px) {
    justify-content: flex-end;
  }
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const Notification = styled.div`
  margin-right: 30px;

  @media screen and (max-width: 427px) {
    margin-right: 20px;
  }
`;
export const LeftContianer = styled.div`
  /* Mobile Phones */
  @media screen and (max-width: 427px) {
    display: none;
  }
`;

export const RightContianer = styled.div`
  display: flex;
  align-items: center;
`;

export const HightLightedText = styled.span`
  color: ${colors.base.primary};
  font-weight: bold;
`;
