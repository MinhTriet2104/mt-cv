import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import "./styles/NavbarItems.css";

const NavbarItems = () => (
  <Menu
    mode="horizontal"
    defaultSelectedKeys={["1"]}
    style={{ lineHeight: "3rem" }}
    className="NavbarItems"
  >
    {/* Home */}
    <Menu.Item key="1">
      <Link to="/mt-cv/">Home</Link>
    </Menu.Item>
    {/* About */}
    <Menu.Item key="2">
      <Link to="/mt-cv/about">About</Link>
    </Menu.Item>
    {/* Projects */}
    <Menu.Item key="3">
      <Link to="/mt-cv/projects">My Projects</Link>
    </Menu.Item>
  </Menu>
);

export default NavbarItems;
