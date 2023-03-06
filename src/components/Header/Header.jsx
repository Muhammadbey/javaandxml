import React, { useContext } from "react";
import { useLocation, Link } from "react-router-dom";

import { ThemeContext } from "../../App";
import { HeaderWrapper } from "./styles";
import "./header.css";

const Header = () => {
  const theme = useContext(ThemeContext);
  const { pathname } = useLocation();

  const route = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Server", path: "/server" },
    // { name: "Context", path: "/context" },
  ];

  return (
    <HeaderWrapper theme={theme}>
      <nav>
        <ul>
          {route.map((route, index) => (
            <li key={index}>
              <Link
                to={route.path}
                className={pathname === route.path ? "active" : ""}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
