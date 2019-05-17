import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import {
  faWrench,
  faCode,
  faChartLine,
  faPencilAlt,
  faLightbulb,
  faQuestion,
  faDivide
} from "@fortawesome/free-solid-svg-icons";

const Link = props => {
  return (
    <div className="link wrench">
      <FontAwesomeIcon icon={props.icon} size="s" className="linkIcon" />
      <a href="#">{props.name}</a>
    </div>
  );
};

export default Link;
