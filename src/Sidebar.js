import React from "react";
import NavLink from "./NavLink";
import InitabLogo from "./InitabLogo";

const Sidebar = () => {
  return (
    <div
      className="sideBar"
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div className="links">
        <NavLink />
      </div>

      <div
        className="logos"
        style={{
          height: "700px",
          display: "flex",
          flexDirection: "column-reverse"
        }}
      >
        <InitabLogo />
      </div>
    </div>
  );
};

export default Sidebar;
