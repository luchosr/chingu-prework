import React from "react";

const Link = props => {
  return (
    <div className="link ">
      <props.icon size="12" className="linkIcon" style={props.iconColor} />
      <a href="#" style={props.color}>
        {props.name}
      </a>
      {/* <props.extraIcon /> */}
    </div>
  );
};

export default Link;
