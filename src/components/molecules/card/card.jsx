import React from "react";
import PropTypes from "prop-types";

import { Header, CardContainer } from "./card.styles";

export const Card = ({ header, rounded, children }) => {
  return (
    <CardContainer rounded={rounded}>
      {header && <Header>{header}</Header>}
      {children}
    </CardContainer>
  );
};

Card.propTypes = {
  /**
   * Title of the card contents
   */
  header: PropTypes.string,
  /**
   * Round the corners of the card
   */
  rounded: PropTypes.bool,
  /**
   * Child elements to be rendered in the body of the card
   */
  children: PropTypes.node,
};

Card.defaultProps = {
  header: "",
  rounded: false,
};
