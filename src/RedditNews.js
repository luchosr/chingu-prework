import React, { Component } from "react";

const RedditNews = props => {
  return (
    <li
      style={{
        margin: "20px",
        fontFamily: "Inconsolata , monospace",
        listStyleType: "none"
      }}
    >
      <h5
        className="postTittle"
        style={{ color: "#F8F8F2", padding: "10px", fontSize: "0.9em" }}
      >
        {props.title}
      </h5>
      <h6
        className="postAuthor"
        style={{ color: "#66d9ef", padding: "5px 10px", fontSize: "0.8em" }}
      >
        Posted By <span style={{ color: "#f1fa8c" }}>{props.author}</span>{" "}
      </h6>
      <h6 className="score" style={{ color: "#6272a4", padding: "10px" }}>
        reddit score {props.score}
      </h6>
      <a
        href={props.url}
        className="comments"
        style={{ textDecoration: "none", color: "#ff79c6", padding: "10px" }}
      >
        Link to Comments
      </a>
    </li>
  );
};

export default RedditNews;
