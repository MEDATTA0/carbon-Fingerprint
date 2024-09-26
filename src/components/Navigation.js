import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const menuList = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];
  return (
    <div className="menu">
      <ul>
        {menuList.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
