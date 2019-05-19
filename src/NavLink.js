import React from "react";
//import linksData from "./linksData";
import Link from "./Link";

import {
  FaWrench,
  FaCode,
  FaChartLine,
  FaPencilAlt,
  FaRegLightbulb,
  FaQuestion,
  FaStackOverflow
} from "react-icons/fa";

const NavLink = () => {
  //const links = linksData.map(link => <Link key={link.id} icon={link.icon} />);
  return (
    <div>
      <Link
        icon={FaWrench}
        name="SETTINGS"
        color={{ color: "#8BE9FD" }}
        iconColor={{ backgroundColor: "#8BE9FD" }}
      />
       <Link icon={FaCode} name="GISTS" color={{ color: "#50FA7B" }} iconColor={{ backgroundColor: "#50FA7B" }} />
      <Link icon={FaStackOverflow} name="STACK OVERFLOW" color={{ color: "#FFB86C" }} iconColor={{ backgroundColor: "#FFB86C" }} />
      <Link icon={FaChartLine} name="TRENDING" color={{ color: "#FF79C5" }} iconColor={{ backgroundColor: "#FF79C5" }} />
      <Link icon={FaPencilAlt} name="SCRATCH PAD" color={{ color: "#BD93F9" }} iconColor={{ backgroundColor: "#BD93F9" }} />
      <Link icon={FaRegLightbulb} name="PLAYGROUND" color={{ color: "#F8F8F2" }} iconColor={{ backgroundColor: "#F8F8F2" }} />
      <Link icon={FaQuestion} name="HELP/INTRO" color={{ color: "#E6DA74" }} iconColor={{ backgroundColor: "#E6DA74" }} /> 
    </div>
  );
};

export default NavLink;
