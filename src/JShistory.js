import React from "react";
import { FaRegClock, FaJsSquare } from "react-icons/fa";
import HistoryData from "./HistoryData";

class JShistory extends React.Component {
  state = {
    jsHistory: [],
    date: new Date()
  };

  render() {
    const historyComponent = HistoryData.map(data => (
      <li style={{ marginBottom: "18px", borderRadius: "3px" }}>
        <span style={{ textAlign: "left" }}>
          <span style={{ padding: "5px" }} /> <FaJsSquare />{" "}
          <a href="https://javascript.info/" style={{ color: "#6272a4" }}>
            {data.title}
          </a>
        </span>

        <span style={{ color: "#999", textAlign: "right", width: "25%" }}>
          {data.timeAgo} ago
        </span>
      </li>
    ));
    return (
      <div
        style={{
          color: "#6272a4",
          fontFamily: "Inconsolata, monospace",
          maxHeight: "100%",
          textAlign: "center",
          position: "relative",
          top: "0",
          width: "45%"
        }}
      >
        <div
          className="linkPanel invisibleScrollbar"
          style={{
            borderBottom: "1px solid #44475a",
            maxHeight: "49%",
            overflow: "auto"
          }}
        >
          <h4
            className="title"
            style={{
              color: "#8be9fd",
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: "10px",
              marginTop: "40px",
              fontSize: "16px"
            }}
          >
            <FaRegClock /> relevant javascript history
          </h4>
          <ul
            className="jsLinkList"
            style={{ listStyleType: "none", marginTop: "40px" }}
          >
            {historyComponent}
          </ul>
        </div>
        <div
          style={{
            width: "100%",
            margin: "auto",
            textAlign: "center",
            whiteSpace: "nowrap",
            cursor: "default",
            position: "absolute",
            bottom: "calc(25% - 101px)",
            height: "202px",
            maxHeight: "202px"
          }}
        >
          <h2
            className="hour"
            style={{
              fontSize: "120px",
              fontWeight: "normal",
              fontFamily: "Helvetica Neue, sans-serif"
            }}
          >
            1:07 <span style={{ fontSize: "32px" }}>PM</span>
          </h2>
          <h5 className="date">May 22, 2019</h5>
          <p className="explText">
            Did you know you can add CUSTOM LINKS to display in this section?
            <br /> Open the SETTINGS panel and add the URLs of your favorites
            sites to the 'CUSTOM LINKS' textarea.
          </p>
        </div>
      </div>
    );
  }
}

export default JShistory;