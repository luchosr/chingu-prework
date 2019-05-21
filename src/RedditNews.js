import React, { Component } from "react";

const RedditNews = props => {
  return (
    <li>
      <h5 className="postTittle" style={{ color: "#F8F8F2" }}>
        {props.title}
      </h5>
      <h6 className="postAuthor" style={{ color: "#66d9ef" }}>
        Posted By <span style={{ color: "#f1fa8c" }}>{props.author}</span>{" "}
      </h6>
      <h6 className="score" style={{ color: "#6272a4" }}>
        reddit score {props.score}
      </h6>
      <a
        href={props.url}
        className="comments"
        style={{ textDecoration: "none", color: "#ff79c6" }}
      >
        Link to Comments
      </a>
    </li>
  );
};

export default RedditNews;
