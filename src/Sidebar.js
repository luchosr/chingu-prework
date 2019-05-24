import React from "react";
import NavLink from "./NavLink";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="links" />
      <NavLink />
      <div className="svg" />
      <img
        src="/Users/lucianoramello/Documents/chingu/prework/src/logo.svg"
        alt=""
      />
    </div>
  );
};

export default Sidebar;
