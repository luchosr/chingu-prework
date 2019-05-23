import React from "react";
import { FaGithubAlt } from "react-icons/fa";

class GithubIssues extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "100%",
          margin: "0px",
          width: "20%"
        }}
      >
        <h4
          style={{
            color: "#8be9fd",
            textTransform: "uppercase",
            fontFamily: "Inconsolata, monospace",
            textAlign: "center",
            marginTop: "40px"
          }}
        >
          <FaGithubAlt />
          <span style={{ margin: "7px" }}>Github Issues History</span>
        </h4>
        <a href="www.gitlab.com">switch to gitlab</a>
      </div>
    );
  }
}

export default GithubIssues;
