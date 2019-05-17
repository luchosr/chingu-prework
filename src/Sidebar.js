import React from "react";
//import { faStackOverflow } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import {
  faWrench,
  faCode,
  faChartLine,
  faPencilAlt,
  faLightbulb,
  faQuestion
} from "@fortawesome/free-solid-svg-icons";
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
