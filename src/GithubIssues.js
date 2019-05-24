import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import IssuesData from "./IssuesData";
import { link } from "fs";
import { maxHeaderSize } from "http";

class GithubIssues extends React.Component {
  render() {
    const issues = IssuesData.map(data => (
      <li
        style={{
          marginBottom: "40px",
          fontSize: "14px",
          textAlign: "left",
          paddingLeft: "10px",
          borderColor: "#44475a",
          borderLeftWidth: "3px",
          borderLeftStyle: "solid"
        }}
      >
        <a
          href="https://www.javascript.info"
          style={{ textAlign: "left", color: "#6272a4" }}
          target="_blank"
        >
          <h5
            style={{
              fontSize: "14px",
              lineHeight: "18px",
              marginBottom: "4px",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis"
            }}
          >
            Repo: {data.repo}{" "}
          </h5>
          <h6
            style={{
              color: "#f1fa8c",
              marginBottom: "4px",
              fontSize: "14px",
              fontWeight: "100",
              lineHeight: "18px"
            }}
          >
            Issue #{data.issueNumber}
          </h6>
          <p style={{ color: "#f8f8f2" }}>{data.issue}</p>
        </a>
      </li>
    ));
    return (
      <div style={{ overflow: "auto", maxHeight: "50%", width: "20%" }}>
        <div
          style={{
            textAlign: "center",
            fontFamily: "Inconsolata, monospace"
          }}
        >
          <h4
            style={{
              color: "#8be9fd",
              fontSize: "16px",
              textTransform: "uppercase",
              textAlign: "center",
              marginTop: "40px",
              marginRight: "10px",
              marginBottom: "0"
            }}
          >
            <FaGithubAlt />
            <span style={{ margin: "7px" }}>Github Issues History</span>
          </h4>
          <a
            href="www.gitlab.com"
            style={{
              textAlign: "center",
              color: "#6272a4",

              fontSize: "12px",
              cursor: "pointer"
            }}
          >
            switch to gitlab
          </a>
          <div style={{ margin: "20px 0 40px 0" }}>
            <a href="#">
              {" "}
              <span
                style={{
                  color: "#f1fa8c",
                  textTransform: "uppercase",
                  textAlign: "center",
                  position: "relative",
                  margin: "5px",
                  fontSize: "14px",
                  fontFamily: "Arial,sans-serif"
                }}
              >
                issues
              </span>
            </a>

            {""}
            <a href="#">
              {" "}
              <span
                style={{
                  color: "#ff79c6",
                  textTransform: "uppercase",
                  textAlign: "center",
                  position: "relative",
                  fontWeight: "bold",
                  margin: "5px"
                }}
              >
                pull requests
              </span>
            </a>
          </div>
          <ul
            style={{
              marginTop: "40px",
              overflow: "auto",
              width: "90%"
            }}
          >
            {issues}
          </ul>
        </div>
      </div>
    );
  }
}

export default GithubIssues;

/*
<div
        style={{
          fontFamily: "Inconsolata, monospace",
          maxHeight: "calc(100% - 140px)",
          padding: "0 20px 0 0",
          display: "flex",
          flexDirection: "column",
          paddingRight: "10px",
          textAlign: "center",
          // borderBottomWidth: "1px",
          // borderStyle: "solid",
          marginLeft: "20px",
          width: "25%"
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", maxHeight: "85%" }}
        >
          <h4
            style={{
              color: "#8be9fd",
              fontSize: "16px",
              textTransform: "uppercase",
              textAlign: "center",
              marginTop: "40px",
              marginRight: "10px",
              marginBottom: "0"
            }}
          >
            <FaGithubAlt />
            <span style={{ margin: "7px" }}>Github Issues History</span>
          </h4>
          <a
            href="www.gitlab.com"
            style={{
              textAlign: "center",
              color: "#6272a4",
              fontFamily: "Inconsolata, monospace",
              fontSize: "12px",
              cursor: "pointer"
            }}
          >
            switch to gitlab
          </a>
          <div
            style={{
              marginTop: "24px",
              textAlign: "center",
              verticalAlign: "baseline"
            }}
          >
            <span
              style={{
                color: "#f1fa8c",
                textTransform: "uppercase",
                textAlign: "center",
                position: "relative"
              }}
            >
              issues
            </span>{" "}
            <span>pull requests</span>
          </div>
          <ul
            style={{
              marginTop: "40px",
              overflow: "auto"
            }}
          >
            {issues}
          </ul>
        </div>

        <div className="advertisement">
          <h4>advertisement</h4>
        </div>
      </div>
*/
