import React, {useContext } from "react";
import { useLocation, Link } from "react-router-dom";

import { ThemeContext } from "../../App";
import "./header.css";

const Header = () => {

const contextTheme = useContext(ThemeContext)
  const { pathname } = useLocation();

  const route = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Server", path: "/server" },
    // { name: "Context", path: "/context" },
  ];
  return (
      <header style={{ backgroundColor: contextTheme.button }}>
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
      </header>
  );
};

export default Header;
