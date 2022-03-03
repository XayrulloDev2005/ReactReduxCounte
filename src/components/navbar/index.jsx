import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { burgerCounter } from "../../redux/actions";

import { BsJustify } from "react-icons/bs";

import "./navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer.counter);

  const handleClick = () => {
    dispatch(burgerCounter(1));
  };
  return (
    <div className="navbarTop d-flex justify-content-around align-items-center">
      <div>
        <button className="navButton" onClick={() => handleClick()}>
          <BsJustify className="navBurgerIcon" />
        </button>
      </div>
      <div>
        <h1>Codemy Admin Panel</h1>
      </div>{" "}
    </div>
  );
};

export default Navbar;
