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
          <span style={{ margin: "10px;" }} />
          <FaGithubAlt />
          Github Issues History
        </h4>
      </div>
    );
  }
}

export default GithubIssues;
