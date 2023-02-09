import React, { useState } from "react";
import PropTypes from "prop-types";
import { Icon, Logo, LinkItem, SidebarContianer } from "./sidebar.styles";

/**
 Main navigation element within protected routes of an application
 */
export const Sidebar = ({ logo, links }) => {
  const [active, setActive] = useState(0);

  return (
    <SidebarContianer>
      <Logo src={logo} alt="Logo of a company" />
      {links.map((link, index) => (
        <LinkItem
          key={index}
          to={link.route}
          active={active === index ? true : false}
          onClick={() => setActive(index)}
        >
          <Icon className="material-symbols-sharp">{link.icon}</Icon>
          {link.text}
        </LinkItem>
      ))}
    </SidebarContianer>
  );
};

Sidebar.propTypes = {
  /**
    Company or brand images
   */
  logo: PropTypes.string,
  /**
    Links for navigating the application
   */
  links: PropTypes.array.isRequired,
};

Sidebar.defaultProps = {
  logo: "",
  links: [],
};
