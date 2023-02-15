import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Icon,
  Logo,
  LinkItem,
  LinkItems,
  SidebarContianer,
} from "./sidebar.styles";

export const Sidebar = ({ logo, links, className }) => {
  const [active, setActive] = useState(0);

  return (
    <SidebarContianer className={className}>
      {logo && <Logo src={logo} alt="Logo of a company" />}
      <LinkItems>
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
      </LinkItems>
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
