import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  NavLink,
  NavLinks,
  NavBarContainer,
  ButtonsContainer,
  MenuIconContainer,
  ThemeIconContainer,
} from "./nav_bar.styles";
import Menu from "../../atoms/icons/menu";
import DarkMode from "../../atoms/icons/dark_mode";

import Logo from "../../atoms/images/logo/logo";
import colors from "../../../theme/colors.json";
import LightMode from "../../atoms/icons/light_mode";

export const NavBar = ({ showLogo, links, children }) => {
  const [theme, setTheme] = useState("light_theme");
  return (
    <NavBarContainer>
      {showLogo && (
        <Logo
          color={colors.text_inverted}
          width={101}
          height={90}
          backgroundColor={colors.primary}
        />
      )}

      <NavLinks>
        {links &&
          links.map((link, index) => (
            <NavLink key={index} to="hello">
              {link.text}
            </NavLink>
          ))}
      </NavLinks>
      <ButtonsContainer>
        <ThemeIconContainer>
          {theme === "light_theme" ? (
            <div onClick={() => setTheme("dark_theme")}>
              <DarkMode backgroundColor={colors.primary} />
            </div>
          ) : (
            <div onClick={() => setTheme("light_theme")}>
              <LightMode backgrounColor={colors.primary} />
            </div>
          )}
        </ThemeIconContainer>
        {children}
      </ButtonsContainer>
      <MenuIconContainer>
        <Menu />
      </MenuIconContainer>
    </NavBarContainer>
  );
};

NavBar.propTypes = {
  /**
   * What background color to use
   */
  links: PropTypes.array.isRequired,
  /**
   * Show or hide the logo
   */
  showLogo: PropTypes.bool,
  /**
   * Children elements like buttons
   */
  children: PropTypes.node,
};

NavBar.defaultProps = {
  size: "small",
  variant: "primary",
  onClick: undefined,
  backgroundColor: null,
};

export default NavBar;
