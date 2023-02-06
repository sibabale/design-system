import React from "react";
import { AvatarContianer } from "./avatar.styles";
import PropTypes from "prop-types";
export const Avatar = ({ size, image }) => {
  return <AvatarContianer src={image} size={size} />;
};

Avatar.propTypes = {
  /**
   * What scale should the avatar be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Image to be rendered
   */
  image: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  size: "medium",
  image: "",
};

export default Avatar;
