import React from "react";
import Navbar from "../navbar/index.jsx";
import Leftmenu from "../leftmenu/index.jsx";
import { Outlet } from "react-router-dom";

import "./layout.css";

const Layout = () => {
  return (
    <div>
      <Navbar title="Navbar" />
      <div className="bar">
        <Leftmenu title="Sidebar" />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
