import React, { Component } from "react";
import JSreddit from "./JSreddit";
import JShistory from "./JShistory";

class MainDisp extends Component {
  render() {
    return (
      <div className="mainDisp">
        <JSreddit />
        <JShistory />
      </div>
    );
  }
}

export default MainDisp;
