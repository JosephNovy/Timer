import React from "react";
import { HeaderContanier } from "./styles";
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContanier>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={28} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={28} />
        </NavLink>
      </nav>
    </HeaderContanier>
  );
};

export default Header;
