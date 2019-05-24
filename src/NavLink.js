import React from "react";
import Link from "./Link";

import {
  FaWrench,
  FaCode,
  FaChartLine,
  FaPencilAlt,
  FaRegLightbulb,
  FaQuestion,
  FaStackOverflow,
  FaLock
} from "react-icons/fa";

const NavLink = () => {
  //const links = linksData.map(link => <Link key={link.id} icon={link.icon} />);
  return (
    <div>
      <Link
        icon={FaWrench}
        name="settings"
        color={{ color: "#8BE9FD" }}
        iconColor={{ backgroundColor: "#8BE9FD" }}
      />
      <Link
        icon={FaCode}
        name="gists"
        color={{ color: "#50FA7B" }}
        iconColor={{ backgroundColor: "#50FA7B" }}
      />
      <Link
        icon={FaStackOverflow}
        name="stack overflow"
        color={{ color: "#FFB86C" }}
        iconColor={{ backgroundColor: "#FFB86C" }}
      />
      <Link
        icon={FaChartLine}
        name="trending"
        color={{ color: "#FF79C5" }}
        iconColor={{ backgroundColor: "#FF79C5" }}
      />
      <Link
        icon={FaPencilAlt}
        name="scratch pad"
        color={{ color: "#BD93F9" }}
        iconColor={{ backgroundColor: "#BD93F9" }}
      />
      <Link
        icon={FaRegLightbulb}
        name="playground"
        color={{ color: "#F8F8F2" }}
        iconColor={{ backgroundColor: "#F8F8F2" }}
        extraIcon={FaLock}
      />
      <Link
        icon={FaQuestion}
        name="help/intro"
        color={{ color: "#E6DA74" }}
        iconColor={{ backgroundColor: "#E6DA74" }}
      />
    </div>
  );
};

export default NavLink;
