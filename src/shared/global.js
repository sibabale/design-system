import { createGlobalStyle, css } from "styled-components";

// import { color, typography } from "./styles";

export const fontUrl =
  "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900";

export const bodyStyles = css`
  /* Same as before */
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-size: 28px;
  }
  p,
  a,
  small,
  span {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 100;
  }
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;
