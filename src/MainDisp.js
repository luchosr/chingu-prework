import React, { Component } from "react";
import JSreddit from "./JSreddit";
import JShistory from "./JShistory";
import GithubIssues from "./GithubIssues";

class MainDisp extends Component {
  render() {
    return (
      <div className="mainDisplay">
        <JSreddit />
        <JShistory />
        <GithubIssues />
      </div>
    );
  }
}

export default MainDisp;
