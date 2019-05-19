import React from "react";
import {
  FaWrench,
  FaCode,
  FaChartLine,
  FaPencilAlt,
  FaLightbulb,
  FaQuestion,
  FaStackOverflow
} from "react-icons/fa";

const Link = props => {
  return (
    <div className="link wrench">
      <props.icon size="12" className="linkIcon" style={props.iconColor} />
      <a href="#" style={props.color}>
        {props.name}
      </a>
    </div>
  );
};

export default Link;
