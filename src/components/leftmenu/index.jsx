import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { BsFillArrowRightSquareFill } from "react-icons/bs";

import "./leftmenu.css";

const Leftmenu = () => {
  const counter = useSelector((state) => state.counterReducer.counter);
  const [hide, setHide] = useState("");

  useEffect(() => {
    HideFunction();
  });

  const HideFunction = () => {
    if (counter % 2 == !0) {
      setHide("hide");
    } else if (counter % 2 == 0) {
      setHide("unHide");
    }
  };

  return (
    <div className="sideBar d-flex flex-column ">
      <div className="listPage">
        <NavLink className="sideBarLink" to="/">
          <BsFillArrowRightSquareFill className="sideBarIcon" />
          <span className={`${hide}`}>About</span>
        </NavLink>
      </div>
      <div className="listPage">
        <NavLink className="sideBarLink " to="/aforizmlar">
          <BsFillArrowRightSquareFill className="sideBarIcon" />{" "}
          <span className={`${hide}`}>Aforizmlar</span>
        </NavLink>
      </div>
      <div className="listPage">
        <NavLink className="sideBarLink " to="/corusel">
          <BsFillArrowRightSquareFill className="sideBarIcon" />{" "}
          <span className={`${hide}`}>Corusel</span>
        </NavLink>
      </div>
      <div className="listPage">
        {" "}
        <NavLink className="sideBarLink " to="/dasturlashtillari">
          <BsFillArrowRightSquareFill className="sideBarIcon" />{" "}
          <span className={`${hide}`}>Dasturlash Tillari</span>
        </NavLink>
      </div>
      <div className="listPage">
        <NavLink className="sideBarLink " to="/kurslar">
          <BsFillArrowRightSquareFill className="sideBarIcon" />{" "}
          <span className={`${hide}`}>Kurslar</span>
        </NavLink>
      </div>
      <div className="listPage">
        <NavLink className="sideBarLink " to="/staffs">
          <BsFillArrowRightSquareFill className="sideBarIcon" />{" "}
          <span className={`${hide}`}>Staffs</span>
        </NavLink>
      </div>
      <div className="listPage">
        <NavLink className="sideBarLink " to="/video">
          <BsFillArrowRightSquareFill className="sideBarIcon" />{" "}
          <span className={`${hide}`}>Video</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Leftmenu;
