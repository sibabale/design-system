import React from "react";
import PropTypes from "prop-types";

import Avatar from "../../atoms/avatar/avatar";
import Button from "../../atoms/button/button";
import Image from "../../../assets/images/avatar.avif";

import {
  BoldText,
  Notification,
  LeftContianer,
  RightContianer,
  HeaderContianer,
  HightLightedText,
} from "./header.styles";

export const Header = ({ children }) => {
  return (
    <HeaderContianer>
      <LeftContianer>
        <h1>
          Welcome to <HightLightedText>Ozow</HightLightedText>
        </h1>
        <small>
          Good morning <BoldText>Marry Jane</BoldText>
        </small>
      </LeftContianer>
      <RightContianer>
        <Notification>
          <Button icon="notifications" variant="transparent" />
        </Notification>
        <Avatar size="small" image={Image} />
      </RightContianer>
    </HeaderContianer>
  );
};

Header.propTypes = {
  /**
   * Elements that make up the header
   */
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {};
export default Header;
