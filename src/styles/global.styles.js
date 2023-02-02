import styled from "styled-components";

import colors from "../theme/colors.json";
import { Link as ReactLink } from "react-router-dom";

export const Link = styled(ReactLink)`
  color: ${({ color }) => (color ? color : colors.text)};
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  @font-face {
    font-family: "Montserrat", sans-serif;
    src: url("../../public/fonts/Montserrat/static/Montserrat-Regular.ttf")
      format("truetype");
  }
`;
