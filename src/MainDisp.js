import React, { Component } from "react";
import JSreddit from "./JSreddit";
import JShistory from "./JShistory";
import GithubIssues from "./GithubIssues";

class MainDisp extends Component {
  render() {
    return (
      <div
        className="mainDisp"
        style={{ maxHeight: "100%", position: "absolute", width: "100%" }}
      >
        <JSreddit />
        <JShistory />
        <GithubIssues />
      </div>
    );
  }
}

export default MainDisp;
