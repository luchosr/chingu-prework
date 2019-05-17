import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faWrench } from "@fortawesome/free-solid-svg-icons";

//const element = <FontAwesomeIcon icon={faCoffee} />

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="links">
        <div className="link">
          <img src="" alt="" />
          <FontAwesomeIcon icon={faWrench} />
          <a href="" />
          SETTINGS
        </div>
        <div className="link">
          <img src="" alt="" class="logo" />
          <FontAwesomeIcon icon={faWrench} />
          <a href="" />
          GISTS
        </div>
        <div className="link">
          <img src="" alt="" className="logo" />
          <a href="" />
          STACK OVERFLOW
        </div>
        <div className="link">
          <img src="" alt="" className="logo" />
          <a href="" />
          TRENDING
        </div>
        <div className="link">
          <img src="" alt="" className="logo" />
          <a href="" />
          SCRATCH PAD
        </div>
        <div className="link">
          <img src="" alt="" className="logo" />
          <a href="" />
          PLAYGROUND
        </div>
        <div className="link">
          <img src="" alt="" className="logo" />
          <a href="" />
          HELP/INTRO
        </div>
      </div>

      <div className="svg" />
      <img
        src="/Users/lucianoramello/Documents/chingu/prework/src/logo.svg"
        alt=""
      />
    </div>
  );
};

export default Navbar;
