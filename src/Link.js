import React from "react";

const Link = props => {
  return (
    <div className="sideBar__Link ">
      <props.icon
        size="12"
        className="sideBar__Link__Icon"
        style={props.iconColor}
      />
      <a href="#" style={props.color}>
        {props.name}
      </a>
      {/* <props.extraIcon /> */}
    </div>
  );
};

export default Link;
