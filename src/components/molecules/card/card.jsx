import React from "react";

import { Header, CardContainer } from "./card.styles";

export const Card = ({ header, children }) => {
  return (
    <CardContainer>
      {header && <Header>{header}</Header>}
      <div>{children}</div>
    </CardContainer>
  );
};
