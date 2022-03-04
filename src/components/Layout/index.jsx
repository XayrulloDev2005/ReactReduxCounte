import React, { useEffect, useState } from "react";
import Navbar from "../navbar/index.jsx";
import Leftmenu from "../leftmenu/index.jsx";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import "./layout.css";

const Layout = () => {
  const counter = useSelector((state) => state.counterReducer.counter);
  const [scroll, setScroll] = useState("");

  useEffect(() => {
    ScrollFunction();
  });

  const ScrollFunction = () => {
    if (counter % 2 == !0) {
      setScroll("scroll");
    } else if (counter % 2 == 0) {
      setScroll("unScroll");
    }
  };
  return (
    <div className="Layout">
      <Navbar title="Navbar" />
      <div className={`d-grid ${scroll}`}>
        <Leftmenu title="Sidebar" />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
